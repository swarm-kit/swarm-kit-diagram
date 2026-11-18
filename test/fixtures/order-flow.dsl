workspace "Order flow" {
  model {
    shop = softwareSystem "Shop" "Takes and fulfils orders." {
      web = container "Storefront" "Where customers order" "React"
      orders = container "Order service" "Owns orders" "Go"
      inventory = container "Inventory service" "Owns stock levels" "Go"
      events = container "Order events" "Order lifecycle events" "Kafka topic"
      billing = container "Billing" "Charges customers" "Go"
      ledger = container "Ledger archive" "Monthly statements" "S3 bucket"
      web -> orders "Places orders with" "JSON/HTTPS"
      orders -> inventory "Syncs stock with" "gRPC"
      inventory -> orders "Syncs stock with" "gRPC"
      orders -> events "Publishes to" "Kafka" {
        tags "Asynchronous"
      }
      events -> billing "Delivers order events to" "Kafka" {
        tags "Asynchronous"
      }
      billing -> ledger "Archives statements to" "S3 API" {
        tags "Batch"
      }
    }
  }
  views {
    container shop "OrderFlow" {
      include *
      autoLayout lr
    }
    styles {
      relationship "Asynchronous" {
        style dashed
        color #0e9488
      }
      relationship "Batch" {
        style dotted
        color #5b5bd6
      }
    }
  }
}
