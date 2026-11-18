/* eslint-disable */
import { getLocale, experimentalStaticLocale } from "../runtime.js"

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ui_App_Shell_Expand_MenuInputs */
/** @typedef {{}} Ui_App_Shell_MenuInputs */
/** @typedef {{}} Ui_App_Shell_Open_MenuInputs */
/** @typedef {{ count: NonNullable<unknown>, names: NonNullable<unknown> }} Ui_Avatar_Stack_LabelInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Avatar_Stack_MoreInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Badge_CountInputs */
/** @typedef {{}} Ui_Badge_NewInputs */
/** @typedef {{ max: NonNullable<unknown> }} Ui_Badge_OverflowInputs */
/** @typedef {{}} Ui_Bar_Chart_CaptionInputs */
/** @typedef {{}} Ui_Bar_Chart_TotalInputs */
/** @typedef {{}} Ui_Bar_Chart_ValueInputs */
/** @typedef {{}} Ui_Brand_NameInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Breakdown_MoreInputs */
/** @typedef {{}} Ui_Breakdown_OtherInputs */
/** @typedef {{}} Ui_Breakdown_Under_OneInputs */
/** @typedef {{}} Ui_Bulk_Bar_ClearInputs */
/** @typedef {{}} Ui_Bulk_Bar_LabelInputs */
/** @typedef {{}} Ui_Bulk_Bar_NounInputs */
/** @typedef {{ total: NonNullable<unknown> }} Ui_Bulk_Bar_Select_AllInputs */
/** @typedef {{ noun: NonNullable<unknown> }} Ui_Bulk_Bar_SelectedInputs */
/** @typedef {{}} Ui_Calendar_NextInputs */
/** @typedef {{}} Ui_Calendar_PreviousInputs */
/** @typedef {{ date: NonNullable<unknown> }} Ui_Calendar_TodayInputs */
/** @typedef {{}} Ui_Canvas_Breadcrumbs_LabelInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_Exit_Full_ScreenInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_FitInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_FlowInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_Flow_OffInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_Full_ScreenInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_LabelInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_RedoInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_TidyInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_UndoInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_Zoom_InInputs */
/** @typedef {{}} Ui_Canvas_Toolbar_Zoom_OutInputs */
/** @typedef {{}} Ui_Chain_FirstInputs */
/** @typedef {{}} Ui_Chain_LabelInputs */
/** @typedef {{ n: NonNullable<unknown> }} Ui_Chain_RankInputs */
/** @typedef {{}} Ui_Chain_ThenInputs */
/** @typedef {{}} Ui_Change_Preview_ApplyInputs */
/** @typedef {{}} Ui_Change_Preview_ApplyingInputs */
/** @typedef {{}} Ui_Change_Preview_Applying_LabelInputs */
/** @typedef {{}} Ui_Change_Preview_CancelInputs */
/** @typedef {{}} Ui_Change_Preview_EmptyInputs */
/** @typedef {{}} Ui_Change_Preview_FewerInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Change_Preview_MoreInputs */
/** @typedef {{}} Ui_Check_Report_Auto_FixInputs */
/** @typedef {{}} Ui_Check_Report_BlockedInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Check_Report_BlockingInputs */
/** @typedef {{}} Ui_Check_Report_CancelInputs */
/** @typedef {{}} Ui_Check_Report_EmptyInputs */
/** @typedef {{}} Ui_Check_Report_Empty_OpenInputs */
/** @typedef {{}} Ui_Check_Report_Filter_AllInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Check_Report_Filter_ClosedInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Check_Report_Filter_OpenInputs */
/** @typedef {{}} Ui_Check_Report_LabelInputs */
/** @typedef {{}} Ui_Check_Report_None_OpenInputs */
/** @typedef {{ level: NonNullable<unknown> }} Ui_Check_Report_Not_WaivableInputs */
/** @typedef {{}} Ui_Check_Report_OpenInputs */
/** @typedef {{}} Ui_Check_Report_PassedInputs */
/** @typedef {{}} Ui_Check_Report_Passed_TitleInputs */
/** @typedef {{}} Ui_Check_Report_ReopenInputs */
/** @typedef {{}} Ui_Check_Report_ResolveInputs */
/** @typedef {{}} Ui_Check_Report_ResolvedInputs */
/** @typedef {{}} Ui_Check_Report_RunningInputs */
/** @typedef {{}} Ui_Check_Report_Running_TitleInputs */
/** @typedef {{}} Ui_Check_Report_ShowInputs */
/** @typedef {{}} Ui_Check_Report_SuggestionInputs */
/** @typedef {{}} Ui_Check_Report_WaiveInputs */
/** @typedef {{}} Ui_Check_Report_Waive_ConfirmInputs */
/** @typedef {{}} Ui_Check_Report_Waive_HelperInputs */
/** @typedef {{}} Ui_Check_Report_Waive_QuestionInputs */
/** @typedef {{}} Ui_Check_Report_WaivedInputs */
/** @typedef {{ by: NonNullable<unknown>, reason: NonNullable<unknown> }} Ui_Check_Report_Waived_ByInputs */
/** @typedef {{}} Ui_Checklist_All_DoneInputs */
/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Checklist_CountInputs */
/** @typedef {{}} Ui_Checklist_DismissInputs */
/** @typedef {{}} Ui_Checklist_ProgressInputs */
/** @typedef {{}} Ui_Checklist_Step_DoneInputs */
/** @typedef {{}} Ui_Checklist_TitleInputs */
/** @typedef {{}} Ui_Choice_Card_ChooseInputs */
/** @typedef {{}} Ui_Choice_Card_SelectedInputs */
/** @typedef {{}} Ui_Choice_Card_TagsInputs */
/** @typedef {{}} Ui_Clause_List_FailInputs */
/** @typedef {{}} Ui_Clause_List_LabelInputs */
/** @typedef {{}} Ui_Clause_List_NoneInputs */
/** @typedef {{}} Ui_Clause_List_PassInputs */
/** @typedef {{ index: NonNullable<unknown>, length: NonNullable<unknown> }} Ui_Code_Input_DigitInputs */
/** @typedef {{}} Ui_Code_Input_Group_LabelInputs */
/** @typedef {{ query: NonNullable<unknown> }} Ui_Combobox_No_MatchesInputs */
/** @typedef {{}} Ui_Combobox_PlaceholderInputs */
/** @typedef {{}} Ui_Compare_Fields_CaptionInputs */
/** @typedef {{}} Ui_Compare_Fields_FieldInputs */
/** @typedef {{}} Ui_Compare_Fields_MatchInputs */
/** @typedef {{}} Ui_Compare_Fields_MismatchInputs */
/** @typedef {{}} Ui_Compare_Fields_NewInputs */
/** @typedef {{}} Ui_Compare_Fields_RemovedInputs */
/** @typedef {{}} Ui_Compare_Fields_ResultInputs */
/** @typedef {{}} Ui_Compare_Fields_WithinInputs */
/** @typedef {{}} Ui_Condition_AndInputs */
/** @typedef {{}} Ui_Condition_CheckedInputs */
/** @typedef {{}} Ui_Condition_ContainsInputs */
/** @typedef {{}} Ui_Condition_EmptyInputs */
/** @typedef {{}} Ui_Condition_FilledInputs */
/** @typedef {{}} Ui_Condition_GtInputs */
/** @typedef {{}} Ui_Condition_IsInputs */
/** @typedef {{}} Ui_Condition_LtInputs */
/** @typedef {{}} Ui_Condition_NotInputs */
/** @typedef {{}} Ui_Condition_Not_CheckedInputs */
/** @typedef {{}} Ui_Confirm_Dialog_CancelInputs */
/** @typedef {{}} Ui_Confirm_Dialog_ConfirmInputs */
/** @typedef {{ phrase: NonNullable<unknown> }} Ui_Confirm_Dialog_Type_To_ConfirmInputs */
/** @typedef {{}} Ui_Copy_Field_AnnounceInputs */
/** @typedef {{}} Ui_Copy_Field_CopiedInputs */
/** @typedef {{}} Ui_Copy_Field_CopyInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_Copy_Field_Copy_NamedInputs */
/** @typedef {{}} Ui_Countdown_Bar_EndInputs */
/** @typedef {{}} Ui_Countdown_Bar_ExtendInputs */
/** @typedef {{}} Ui_Countdown_Bar_LabelInputs */
/** @typedef {{}} Ui_Danger_Zone_TitleInputs */
/** @typedef {{}} Ui_Date_Picker_LabelInputs */
/** @typedef {{}} Ui_Date_Picker_PlaceholderInputs */
/** @typedef {{}} Ui_Date_Picker_TodayInputs */
/** @typedef {{}} Ui_Date_Range_Picker_ApplyInputs */
/** @typedef {{}} Ui_Date_Range_Picker_CancelInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Date_Range_Picker_DaysInputs */
/** @typedef {{}} Ui_Date_Range_Picker_LabelInputs */
/** @typedef {{}} Ui_Date_Range_Picker_Last_30Inputs */
/** @typedef {{}} Ui_Date_Range_Picker_Last_7Inputs */
/** @typedef {{}} Ui_Date_Range_Picker_Last_90Inputs */
/** @typedef {{}} Ui_Date_Range_Picker_Last_MonthInputs */
/** @typedef {{}} Ui_Date_Range_Picker_Pick_EndInputs */
/** @typedef {{}} Ui_Date_Range_Picker_Pick_StartInputs */
/** @typedef {{}} Ui_Date_Range_Picker_PrefixInputs */
/** @typedef {{}} Ui_Date_Range_Picker_This_MonthInputs */
/** @typedef {{ zone: NonNullable<unknown> }} Ui_Date_Range_Picker_Time_ZoneInputs */
/** @typedef {{}} Ui_Date_Range_Picker_TodayInputs */
/** @typedef {{}} Ui_Decision_Panel_ApproveInputs */
/** @typedef {{}} Ui_Decision_Panel_Key_ApproveInputs */
/** @typedef {{}} Ui_Decision_Panel_Key_RejectInputs */
/** @typedef {{ title: NonNullable<unknown> }} Ui_Decision_Panel_LabelInputs */
/** @typedef {{}} Ui_Decision_Panel_NoteInputs */
/** @typedef {{}} Ui_Decision_Panel_Note_PlaceholderInputs */
/** @typedef {{}} Ui_Decision_Panel_ProposalInputs */
/** @typedef {{ note: NonNullable<unknown> }} Ui_Decision_Panel_QuoteInputs */
/** @typedef {{}} Ui_Decision_Panel_ReasonInputs */
/** @typedef {{}} Ui_Decision_Panel_RejectInputs */
/** @typedef {{}} Ui_Decision_Panel_Send_BackInputs */
/** @typedef {{}} Ui_Decision_Panel_UndoInputs */
/** @typedef {{}} Ui_Detail_List_LabelInputs */
/** @typedef {{}} Ui_Detail_List_LockedInputs */
/** @typedef {{}} Ui_Diagram_Canvas_LabelInputs */
/** @typedef {{}} Ui_Diagram_Canvas_RoledescriptionInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_Diagram_Canvas_SelectedInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Diagram_Canvas_Selected_ManyInputs */
/** @typedef {{ first: NonNullable<unknown>, second: NonNullable<unknown> }} Ui_Diagram_Edge_AndInputs */
/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown> }} Ui_Diagram_Edge_BetweenInputs */
/** @typedef {{ between: NonNullable<unknown>, description: NonNullable<unknown> }} Ui_Diagram_Edge_DescribedInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Diagram_Edge_End_LabelInputs */
/** @typedef {{ start: NonNullable<unknown>, end: NonNullable<unknown> }} Ui_Diagram_Edge_End_LabelsInputs */
/** @typedef {{ label: NonNullable<unknown>, technology: NonNullable<unknown> }} Ui_Diagram_Edge_Label_TechnologyInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Diagram_Edge_Start_LabelInputs */
/** @typedef {{}} Ui_Diagram_Edge_UnnamedInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Diagram_Group_LabelInputs */
/** @typedef {{ label: NonNullable<unknown>, type: NonNullable<unknown> }} Ui_Diagram_Group_Label_TypedInputs */
/** @typedef {{}} Ui_Diagram_Group_SelectedInputs */
/** @typedef {{}} Ui_Diagram_Kind_ActorInputs */
/** @typedef {{}} Ui_Diagram_Kind_Ai_AgentInputs */
/** @typedef {{}} Ui_Diagram_Kind_Api_GatewayInputs */
/** @typedef {{}} Ui_Diagram_Kind_CacheInputs */
/** @typedef {{}} Ui_Diagram_Kind_CdnInputs */
/** @typedef {{}} Ui_Diagram_Kind_ClassInputs */
/** @typedef {{}} Ui_Diagram_Kind_CliInputs */
/** @typedef {{}} Ui_Diagram_Kind_ComponentInputs */
/** @typedef {{}} Ui_Diagram_Kind_ContainerInputs */
/** @typedef {{}} Ui_Diagram_Kind_DatabaseInputs */
/** @typedef {{}} Ui_Diagram_Kind_Deployment_NodeInputs */
/** @typedef {{}} Ui_Diagram_Kind_Desktop_AppInputs */
/** @typedef {{}} Ui_Diagram_Kind_DocumentInputs */
/** @typedef {{}} Ui_Diagram_Kind_EmailInputs */
/** @typedef {{}} Ui_Diagram_Kind_EnumInputs */
/** @typedef {{}} Ui_Diagram_Kind_External_ApiInputs */
/** @typedef {{}} Ui_Diagram_Kind_External_SystemInputs */
/** @typedef {{}} Ui_Diagram_Kind_File_StoreInputs */
/** @typedef {{}} Ui_Diagram_Kind_Final_StateInputs */
/** @typedef {{}} Ui_Diagram_Kind_Fork_JoinInputs */
/** @typedef {{}} Ui_Diagram_Kind_FunctionInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_C4Inputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_ClientsInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_ComputeInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_DataInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_NetworkInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_OtherInputs */
/** @typedef {{}} Ui_Diagram_Kind_Group_UmlInputs */
/** @typedef {{}} Ui_Diagram_Kind_Identity_ProviderInputs */
/** @typedef {{}} Ui_Diagram_Kind_Initial_StateInputs */
/** @typedef {{}} Ui_Diagram_Kind_InterfaceInputs */
/** @typedef {{}} Ui_Diagram_Kind_InternetInputs */
/** @typedef {{}} Ui_Diagram_Kind_Load_BalancerInputs */
/** @typedef {{}} Ui_Diagram_Kind_Mobile_AppInputs */
/** @typedef {{}} Ui_Diagram_Kind_ObjectInputs */
/** @typedef {{}} Ui_Diagram_Kind_Object_StorageInputs */
/** @typedef {{}} Ui_Diagram_Kind_PackageInputs */
/** @typedef {{}} Ui_Diagram_Kind_PeopleInputs */
/** @typedef {{}} Ui_Diagram_Kind_PersonInputs */
/** @typedef {{}} Ui_Diagram_Kind_Preview_LabelInputs */
/** @typedef {{}} Ui_Diagram_Kind_QueueInputs */
/** @typedef {{}} Ui_Diagram_Kind_RouterInputs */
/** @typedef {{}} Ui_Diagram_Kind_Scheduled_JobInputs */
/** @typedef {{}} Ui_Diagram_Kind_ServiceInputs */
/** @typedef {{}} Ui_Diagram_Kind_StateInputs */
/** @typedef {{}} Ui_Diagram_Kind_StreamInputs */
/** @typedef {{}} Ui_Diagram_Kind_SystemInputs */
/** @typedef {{}} Ui_Diagram_Kind_Use_CaseInputs */
/** @typedef {{}} Ui_Diagram_Kind_Web_AppInputs */
/** @typedef {{}} Ui_Diagram_Kind_WorkerInputs */
/** @typedef {{}} Ui_Diagram_Legend_ElementsInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_ArrowInputs */
/** @typedef {{ line: NonNullable<unknown>, end: NonNullable<unknown> }} Ui_Diagram_Legend_End_At_EndInputs */
/** @typedef {{ line: NonNullable<unknown>, end: NonNullable<unknown> }} Ui_Diagram_Legend_End_At_StartInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_DiamondInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_Diamond_OpenInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_DotInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_OpenInputs */
/** @typedef {{}} Ui_Diagram_Legend_End_TriangleInputs */
/** @typedef {{ line: NonNullable<unknown>, start: NonNullable<unknown>, end: NonNullable<unknown> }} Ui_Diagram_Legend_Ends_BothInputs */
/** @typedef {{}} Ui_Diagram_Legend_Line_DashedInputs */
/** @typedef {{}} Ui_Diagram_Legend_Line_DottedInputs */
/** @typedef {{}} Ui_Diagram_Legend_Line_SolidInputs */
/** @typedef {{}} Ui_Diagram_Legend_RelationshipsInputs */
/** @typedef {{}} Ui_Diagram_Legend_TitleInputs */
/** @typedef {{ line: NonNullable<unknown> }} Ui_Diagram_Legend_Two_WayInputs */
/** @typedef {{}} Ui_Diagram_Node_ExternalInputs */
/** @typedef {{}} Ui_Diagram_Node_SelectedInputs */
/** @typedef {{ stereotype: NonNullable<unknown> }} Ui_Diagram_Node_StereotypeInputs */
/** @typedef {{ technology: NonNullable<unknown> }} Ui_Diagram_Node_TechnologyInputs */
/** @typedef {{}} Ui_Diagram_Note_LabelInputs */
/** @typedef {{}} Ui_Diagram_Note_SelectedInputs */
/** @typedef {{}} Ui_Dialog_CloseInputs */
/** @typedef {{}} Ui_Diff_AddedInputs */
/** @typedef {{}} Ui_Diff_ChangedInputs */
/** @typedef {{}} Ui_Diff_EmptyInputs */
/** @typedef {{ kind: NonNullable<unknown> }} Ui_Diff_KindInputs */
/** @typedef {{}} Ui_Diff_RemovedInputs */
/** @typedef {{}} Ui_Drawer_LabelInputs */
/** @typedef {{ days: NonNullable<unknown> }} Ui_Duration_DaysInputs */
/** @typedef {{ days: NonNullable<unknown>, hours: NonNullable<unknown> }} Ui_Duration_Days_HoursInputs */
/** @typedef {{ hours: NonNullable<unknown> }} Ui_Duration_HoursInputs */
/** @typedef {{ hours: NonNullable<unknown>, minutes: NonNullable<unknown> }} Ui_Duration_Hours_MinutesInputs */
/** @typedef {{ minutes: NonNullable<unknown> }} Ui_Duration_MinutesInputs */
/** @typedef {{}} Ui_Duration_Picker_CustomInputs */
/** @typedef {{}} Ui_Duration_Picker_HoursInputs */
/** @typedef {{}} Ui_Duration_Picker_Hours_SuffixInputs */
/** @typedef {{}} Ui_Duration_Picker_LabelInputs */
/** @typedef {{ weekday: NonNullable<unknown>, day: NonNullable<unknown>, month: NonNullable<unknown>, time: NonNullable<unknown> }} Ui_Duration_Picker_On_DayInputs */
/** @typedef {{ max: NonNullable<unknown> }} Ui_Duration_Picker_Over_PolicyInputs */
/** @typedef {{ max: NonNullable<unknown> }} Ui_Duration_Picker_Policy_MaxInputs */
/** @typedef {{ time: NonNullable<unknown> }} Ui_Duration_Picker_TodayInputs */
/** @typedef {{}} Ui_Duration_Picker_UntilInputs */
/** @typedef {{}} Ui_Duration_Under_MinuteInputs */
/** @typedef {{}} Ui_Error_State_Request_IdInputs */
/** @typedef {{}} Ui_Feature_List_NoInputs */
/** @typedef {{}} Ui_Feature_List_YesInputs */
/** @typedef {{}} Ui_Feed_Item_UnreadInputs */
/** @typedef {{}} Ui_Feed_Panel_AllInputs */
/** @typedef {{}} Ui_Feed_Panel_Empty_TextInputs */
/** @typedef {{}} Ui_Feed_Panel_Empty_TitleInputs */
/** @typedef {{}} Ui_Feed_Panel_FilterInputs */
/** @typedef {{}} Ui_Feed_Panel_Mark_All_ReadInputs */
/** @typedef {{}} Ui_Feed_Panel_UnreadInputs */
/** @typedef {{}} Ui_Field_Inspector_Add_OptionInputs */
/** @typedef {{}} Ui_Field_Inspector_CheckedInputs */
/** @typedef {{}} Ui_Field_Inspector_ConditionInputs */
/** @typedef {{}} Ui_Field_Inspector_Condition_FieldInputs */
/** @typedef {{}} Ui_Field_Inspector_Condition_HintInputs */
/** @typedef {{}} Ui_Field_Inspector_Condition_NoneInputs */
/** @typedef {{}} Ui_Field_Inspector_Condition_OpInputs */
/** @typedef {{}} Ui_Field_Inspector_Condition_ValueInputs */
/** @typedef {{}} Ui_Field_Inspector_DeleteInputs */
/** @typedef {{}} Ui_Field_Inspector_EmptyInputs */
/** @typedef {{}} Ui_Field_Inspector_HeadingInputs */
/** @typedef {{}} Ui_Field_Inspector_HelpInputs */
/** @typedef {{}} Ui_Field_Inspector_Help_PlaceholderInputs */
/** @typedef {{}} Ui_Field_Inspector_Key_HintInputs */
/** @typedef {{}} Ui_Field_Inspector_MaxInputs */
/** @typedef {{}} Ui_Field_Inspector_MinInputs */
/** @typedef {{ number: NonNullable<unknown> }} Ui_Field_Inspector_New_OptionInputs */
/** @typedef {{}} Ui_Field_Inspector_Not_CheckedInputs */
/** @typedef {{ number: NonNullable<unknown> }} Ui_Field_Inspector_OptionInputs */
/** @typedef {{}} Ui_Field_Inspector_OptionsInputs */
/** @typedef {{}} Ui_Field_Inspector_PlaceholderInputs */
/** @typedef {{}} Ui_Field_Inspector_QuestionInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Field_Inspector_Remove_OptionInputs */
/** @typedef {{}} Ui_Field_Inspector_RequiredInputs */
/** @typedef {{}} Ui_Field_Inspector_Required_HintInputs */
/** @typedef {{}} Ui_Field_Inspector_SourceInputs */
/** @typedef {{}} Ui_Field_Palette_AddInputs */
/** @typedef {{}} Ui_Field_Palette_LabelInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_File_Upload_CancelInputs */
/** @typedef {{}} Ui_File_Upload_ChooseInputs */
/** @typedef {{}} Ui_File_Upload_Drag_ManyInputs */
/** @typedef {{}} Ui_File_Upload_Drag_OneInputs */
/** @typedef {{}} Ui_File_Upload_DropInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_File_Upload_RemoveInputs */
/** @typedef {{ size: NonNullable<unknown> }} Ui_File_Upload_Too_LargeInputs */
/** @typedef {{}} Ui_File_Upload_UnsupportedInputs */
/** @typedef {{ size: NonNullable<unknown> }} Ui_File_Upload_Up_ToInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_File_Upload_UploadingInputs */
/** @typedef {{ label: NonNullable<unknown>, first: NonNullable<unknown>, more: NonNullable<unknown> }} Ui_Filter_Bar_Chip_MoreInputs */
/** @typedef {{ label: NonNullable<unknown>, first: NonNullable<unknown> }} Ui_Filter_Bar_Chip_OneInputs */
/** @typedef {{}} Ui_Filter_Bar_ClearInputs */
/** @typedef {{}} Ui_Filter_Bar_Clear_AllInputs */
/** @typedef {{}} Ui_Filter_Bar_DoneInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_Filter_Bar_Filter_ByInputs */
/** @typedef {{}} Ui_Filter_Bar_LabelInputs */
/** @typedef {{}} Ui_Filter_Bar_SearchInputs */
/** @typedef {{}} Ui_Flow_Canvas_LabelInputs */
/** @typedef {{}} Ui_Flow_Canvas_RoledescriptionInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Flow_Node_CommentsInputs */
/** @typedef {{ count: NonNullable<unknown>, title: NonNullable<unknown> }} Ui_Flow_Node_Comments_OnInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_AddedInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_Badge_AddedInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_Badge_ChangedInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_Badge_RemovedInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_ChangedInputs */
/** @typedef {{}} Ui_Flow_Node_Diff_RemovedInputs */
/** @typedef {{ kind: NonNullable<unknown>, source: NonNullable<unknown> }} Ui_Flow_Node_Kind_SourceInputs */
/** @typedef {{ kind: NonNullable<unknown>, title: NonNullable<unknown> }} Ui_Flow_Node_LabelInputs */
/** @typedef {{}} Ui_Flow_Node_SelectedInputs */
/** @typedef {{}} Ui_Flow_Node_State_FailedInputs */
/** @typedef {{}} Ui_Flow_Node_State_RunningInputs */
/** @typedef {{}} Ui_Flow_Node_State_SkippedInputs */
/** @typedef {{}} Ui_Flow_Node_State_SucceededInputs */
/** @typedef {{}} Ui_Flow_Node_State_WaitingInputs */
/** @typedef {{}} Ui_Form_Builder_Group_AdvancedInputs */
/** @typedef {{}} Ui_Form_Builder_Group_BasicInputs */
/** @typedef {{}} Ui_Form_Builder_Group_ChoicesInputs */
/** @typedef {{}} Ui_Form_Builder_Type_CheckboxInputs */
/** @typedef {{}} Ui_Form_Builder_Type_DateInputs */
/** @typedef {{}} Ui_Form_Builder_Type_FileInputs */
/** @typedef {{}} Ui_Form_Builder_Type_LookupInputs */
/** @typedef {{}} Ui_Form_Builder_Type_MoneyInputs */
/** @typedef {{}} Ui_Form_Builder_Type_MultiselectInputs */
/** @typedef {{}} Ui_Form_Builder_Type_NumberInputs */
/** @typedef {{}} Ui_Form_Builder_Type_PersonInputs */
/** @typedef {{}} Ui_Form_Builder_Type_SectionInputs */
/** @typedef {{}} Ui_Form_Builder_Type_SelectInputs */
/** @typedef {{}} Ui_Form_Builder_Type_TextInputs */
/** @typedef {{}} Ui_Form_Builder_Type_TextareaInputs */
/** @typedef {{}} Ui_Form_Error_TitleInputs */
/** @typedef {{}} Ui_Form_Field_Card_Conditional_SuffixInputs */
/** @typedef {{}} Ui_Form_Field_Card_DeleteInputs */
/** @typedef {{}} Ui_Form_Field_Card_DropInputs */
/** @typedef {{}} Ui_Form_Field_Card_DuplicateInputs */
/** @typedef {{ condition: NonNullable<unknown> }} Ui_Form_Field_Card_IfInputs */
/** @typedef {{}} Ui_Form_Field_Card_Move_DownInputs */
/** @typedef {{}} Ui_Form_Field_Card_Move_UpInputs */
/** @typedef {{}} Ui_Form_Field_Card_RecordsInputs */
/** @typedef {{}} Ui_Form_Field_Card_RequiredInputs */
/** @typedef {{}} Ui_Form_Field_Card_Required_SuffixInputs */
/** @typedef {{ source: NonNullable<unknown> }} Ui_Form_Field_Card_SearchInputs */
/** @typedef {{}} Ui_Form_Field_Card_Search_PeopleInputs */
/** @typedef {{ condition: NonNullable<unknown> }} Ui_Form_Field_Card_Shown_IfInputs */
/** @typedef {{}} Ui_Form_OptionalInputs */
/** @typedef {{}} Ui_Form_Renderer_AttachInputs */
/** @typedef {{}} Ui_Form_Renderer_ChooseInputs */
/** @typedef {{}} Ui_Form_Renderer_ConfirmInputs */
/** @typedef {{}} Ui_Form_Renderer_EmailInputs */
/** @typedef {{ max: NonNullable<unknown> }} Ui_Form_Renderer_MaxInputs */
/** @typedef {{ min: NonNullable<unknown> }} Ui_Form_Renderer_MinInputs */
/** @typedef {{}} Ui_Form_Renderer_RequiredInputs */
/** @typedef {{}} Ui_Form_Renderer_SubmitInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Form_Renderer_SummaryInputs */
/** @typedef {{ count: NonNullable<unknown>, name: NonNullable<unknown> }} Ui_Group_Card_SelectInputs */
/** @typedef {{ count: NonNullable<unknown>, list: NonNullable<unknown> }} Ui_Grouped_Toggle_List_Also_OffInputs */
/** @typedef {{ list: NonNullable<unknown> }} Ui_Grouped_Toggle_List_Also_OnInputs */
/** @typedef {{ on: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Grouped_Toggle_List_CountInputs */
/** @typedef {{}} Ui_Grouped_Toggle_List_OffInputs */
/** @typedef {{}} Ui_Inbox_List_EmptyInputs */
/** @typedef {{}} Ui_Inbox_List_LabelInputs */
/** @typedef {{}} Ui_Inbox_List_NewInputs */
/** @typedef {{}} Ui_Inspector_CloseInputs */
/** @typedef {{}} Ui_Inspector_LabelInputs */
/** @typedef {{ title: NonNullable<unknown>, column: NonNullable<unknown> }} Ui_Kanban_CancelledInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Kanban_Card_CommentsInputs */
/** @typedef {{}} Ui_Kanban_Card_FlaggedInputs */
/** @typedef {{ title: NonNullable<unknown> }} Ui_Kanban_Card_MovingInputs */
/** @typedef {{}} Ui_Kanban_Card_RoledescriptionInputs */
/** @typedef {{}} Ui_Kanban_Card_UnownedInputs */
/** @typedef {{ column: NonNullable<unknown> }} Ui_Kanban_Column_AddInputs */
/** @typedef {{}} Ui_Kanban_Column_DropInputs */
/** @typedef {{}} Ui_Kanban_Column_EmptyInputs */
/** @typedef {{ count: NonNullable<unknown>, title: NonNullable<unknown> }} Ui_Kanban_Column_LabelInputs */
/** @typedef {{ limit: NonNullable<unknown> }} Ui_Kanban_Column_LimitInputs */
/** @typedef {{ limit: NonNullable<unknown> }} Ui_Kanban_Column_OverInputs */
/** @typedef {{ title: NonNullable<unknown> }} Ui_Kanban_Dropped_In_PlaceInputs */
/** @typedef {{}} Ui_Kanban_HelpInputs */
/** @typedef {{}} Ui_Kanban_LabelInputs */
/** @typedef {{ column: NonNullable<unknown>, title: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Kanban_Moved_ToInputs */
/** @typedef {{ title: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Kanban_Moved_WithinInputs */
/** @typedef {{ column: NonNullable<unknown>, limit: NonNullable<unknown> }} Ui_Kanban_Over_LimitInputs */
/** @typedef {{ title: NonNullable<unknown>, column: NonNullable<unknown>, position: NonNullable<unknown> }} Ui_Kanban_Picked_UpInputs */
/** @typedef {{ column: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Kanban_PositionInputs */
/** @typedef {{}} Ui_Line_Chart_CaptionInputs */
/** @typedef {{ value: NonNullable<unknown> }} Ui_Line_Chart_TargetInputs */
/** @typedef {{}} Ui_Link_New_TabInputs */
/** @typedef {{ column: NonNullable<unknown>, row: NonNullable<unknown> }} Ui_Mapping_Table_ChoiceInputs */
/** @typedef {{}} Ui_Mapping_Table_EmptyInputs */
/** @typedef {{}} Ui_Mapping_Table_LabelInputs */
/** @typedef {{ row: NonNullable<unknown> }} Ui_Mapping_Table_RemoveInputs */
/** @typedef {{}} Ui_Mapping_Table_StatusInputs */
/** @typedef {{}} Ui_Mark_LabelInputs */
/** @typedef {{}} Ui_Matrix_Table_NoInputs */
/** @typedef {{}} Ui_Matrix_Table_YesInputs */
/** @typedef {{}} Ui_Menu_LabelInputs */
/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Ui_Multi_Select_CountInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Multi_Select_RemoveInputs */
/** @typedef {{}} Ui_Nav_List_LabelInputs */
/** @typedef {{}} Ui_Node_Palette_SearchInputs */
/** @typedef {{}} Ui_Number_Input_DecreaseInputs */
/** @typedef {{}} Ui_Number_Input_IncreaseInputs */
/** @typedef {{}} Ui_Pagination_LabelInputs */
/** @typedef {{}} Ui_Pagination_NextInputs */
/** @typedef {{}} Ui_Pagination_NounInputs */
/** @typedef {{ total: NonNullable<unknown>, noun: NonNullable<unknown> }} Ui_Pagination_OfInputs */
/** @typedef {{ page: NonNullable<unknown> }} Ui_Pagination_PageInputs */
/** @typedef {{ page: NonNullable<unknown>, count: NonNullable<unknown> }} Ui_Pagination_Page_OfInputs */
/** @typedef {{}} Ui_Pagination_PreviousInputs */
/** @typedef {{}} Ui_Pagination_RowsInputs */
/** @typedef {{}} Ui_Phase_Rail_BlockedInputs */
/** @typedef {{}} Ui_Phase_Rail_CheckpointInputs */
/** @typedef {{}} Ui_Phase_Rail_Checkpoint_BlockedInputs */
/** @typedef {{}} Ui_Phase_Rail_Checkpoint_PassedInputs */
/** @typedef {{}} Ui_Phase_Rail_CurrentInputs */
/** @typedef {{}} Ui_Phase_Rail_DoneInputs */
/** @typedef {{}} Ui_Phase_Rail_LabelInputs */
/** @typedef {{}} Ui_Phase_Rail_UpcomingInputs */
/** @typedef {{ label: NonNullable<unknown>, time: NonNullable<unknown> }} Ui_Playback_Bar_MarkerInputs */
/** @typedef {{}} Ui_Playback_Bar_NextInputs */
/** @typedef {{}} Ui_Playback_Bar_PauseInputs */
/** @typedef {{}} Ui_Playback_Bar_PlayInputs */
/** @typedef {{}} Ui_Playback_Bar_PositionInputs */
/** @typedef {{}} Ui_Playback_Bar_PreviousInputs */
/** @typedef {{}} Ui_Playback_Bar_SpeedInputs */
/** @typedef {{ speed: NonNullable<unknown> }} Ui_Playback_Bar_Speed_OptionInputs */
/** @typedef {{}} Ui_Popover_LabelInputs */
/** @typedef {{}} Ui_Progress_Bar_LabelInputs */
/** @typedef {{}} Ui_Question_Card_AnswerInputs */
/** @typedef {{}} Ui_Question_Card_ChangeInputs */
/** @typedef {{}} Ui_Question_Card_LaterInputs */
/** @typedef {{}} Ui_Question_Card_OtherInputs */
/** @typedef {{}} Ui_Question_Card_SuggestedInputs */
/** @typedef {{}} Ui_Question_Card_Your_AnswerInputs */
/** @typedef {{ group: NonNullable<unknown> }} Ui_Reassign_List_Action_ForInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Reassign_List_And_MoreInputs */
/** @typedef {{}} Ui_Reassign_List_AssignInputs */
/** @typedef {{ group: NonNullable<unknown> }} Ui_Reassign_List_Assign_GroupInputs */
/** @typedef {{ item: NonNullable<unknown> }} Ui_Reassign_List_Assign_ItemInputs */
/** @typedef {{}} Ui_Reassign_List_ChooseInputs */
/** @typedef {{}} Ui_Reassign_List_HideInputs */
/** @typedef {{}} Ui_Reassign_List_NothingInputs */
/** @typedef {{}} Ui_Reassign_List_PendingInputs */
/** @typedef {{}} Ui_Reassign_List_Per_ItemInputs */
/** @typedef {{}} Ui_Reassign_List_PickInputs */
/** @typedef {{}} Ui_Reassign_List_ReadyInputs */
/** @typedef {{}} Ui_Request_Card_ApproveInputs */
/** @typedef {{}} Ui_Request_Card_Approve_ForInputs */
/** @typedef {{}} Ui_Request_Card_BackInputs */
/** @typedef {{}} Ui_Request_Card_DenyInputs */
/** @typedef {{}} Ui_Request_Card_Deny_ConfirmInputs */
/** @typedef {{}} Ui_Request_Card_Deny_ReasonInputs */
/** @typedef {{}} Ui_Request_Card_EndInputs */
/** @typedef {{}} Ui_Rule_Builder_Add_ConditionInputs */
/** @typedef {{}} Ui_Rule_Builder_Add_RuleInputs */
/** @typedef {{}} Ui_Rule_Builder_CheckedInputs */
/** @typedef {{}} Ui_Rule_Builder_ConditionInputs */
/** @typedef {{}} Ui_Rule_Builder_DeleteInputs */
/** @typedef {{}} Ui_Rule_Builder_FieldInputs */
/** @typedef {{}} Ui_Rule_Builder_IfInputs */
/** @typedef {{}} Ui_Rule_Builder_Kw_AndInputs */
/** @typedef {{}} Ui_Rule_Builder_Kw_IfInputs */
/** @typedef {{}} Ui_Rule_Builder_Kw_OtherwiseInputs */
/** @typedef {{}} Ui_Rule_Builder_Kw_ThenInputs */
/** @typedef {{}} Ui_Rule_Builder_LabelInputs */
/** @typedef {{}} Ui_Rule_Builder_Lands_HereInputs */
/** @typedef {{}} Ui_Rule_Builder_MatchesInputs */
/** @typedef {{}} Ui_Rule_Builder_Move_DownInputs */
/** @typedef {{}} Ui_Rule_Builder_Move_UpInputs */
/** @typedef {{}} Ui_Rule_Builder_Not_CheckedInputs */
/** @typedef {{}} Ui_Rule_Builder_Remove_ConditionInputs */
/** @typedef {{ number: NonNullable<unknown> }} Ui_Rule_Builder_RuleInputs */
/** @typedef {{}} Ui_Rule_Builder_Then_LowerInputs */
/** @typedef {{}} Ui_Rule_Builder_ValueInputs */
/** @typedef {{}} Ui_Rule_Row_OffInputs */
/** @typedef {{}} Ui_Rule_Row_OnInputs */
/** @typedef {{}} Ui_Secret_Field_HelperInputs */
/** @typedef {{}} Ui_Secret_Field_HideInputs */
/** @typedef {{}} Ui_Secret_Field_LabelInputs */
/** @typedef {{ last4: NonNullable<unknown> }} Ui_Secret_Field_MaskInputs */
/** @typedef {{}} Ui_Secret_Field_ReplaceInputs */
/** @typedef {{}} Ui_Secret_Field_ShowInputs */
/** @typedef {{}} Ui_Settings_Nav_LabelInputs */
/** @typedef {{}} Ui_Share_List_AddInputs */
/** @typedef {{}} Ui_Share_List_Add_LabelInputs */
/** @typedef {{}} Ui_Share_List_ChooseInputs */
/** @typedef {{}} Ui_Share_List_LabelInputs */
/** @typedef {{}} Ui_Share_List_LevelInputs */
/** @typedef {{ level: NonNullable<unknown>, name: NonNullable<unknown> }} Ui_Share_List_Level_ForInputs */
/** @typedef {{}} Ui_Share_List_NoneInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_Share_List_RemoveInputs */
/** @typedef {{}} Ui_Sidebar_CollapseInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Sidebar_Group_ToggleInputs */
/** @typedef {{}} Ui_Sidebar_LabelInputs */
/** @typedef {{ count: NonNullable<unknown> }} Ui_Source_List_AllInputs */
/** @typedef {{}} Ui_Source_List_EmptyInputs */
/** @typedef {{}} Ui_Source_List_FilterInputs */
/** @typedef {{}} Ui_Source_List_LabelInputs */
/** @typedef {{ label: NonNullable<unknown> }} Ui_Source_List_RemoveInputs */
/** @typedef {{}} Ui_Spinner_LabelInputs */
/** @typedef {{}} Ui_Status_Row_UnknownInputs */
/** @typedef {{}} Ui_Stepper_CompletedInputs */
/** @typedef {{}} Ui_Stepper_CurrentInputs */
/** @typedef {{}} Ui_Stepper_LabelInputs */
/** @typedef {{}} Ui_Suggestion_Card_AcceptInputs */
/** @typedef {{ value: NonNullable<unknown> }} Ui_Suggestion_Card_ConfidenceInputs */
/** @typedef {{}} Ui_Suggestion_Card_Confidence_HintInputs */
/** @typedef {{}} Ui_Suggestion_Card_DoneInputs */
/** @typedef {{}} Ui_Suggestion_Card_EditInputs */
/** @typedef {{}} Ui_Suggestion_Card_LabelInputs */
/** @typedef {{}} Ui_Suggestion_Card_ProposedInputs */
/** @typedef {{}} Ui_Suggestion_Card_RejectInputs */
/** @typedef {{}} Ui_Suggestion_Card_RejectedInputs */
/** @typedef {{}} Ui_Suggestion_Card_RunningInputs */
/** @typedef {{}} Ui_Suggestion_Card_Step_DoneInputs */
/** @typedef {{}} Ui_Sync_Status_ErrorInputs */
/** @typedef {{ state: NonNullable<unknown>, source: NonNullable<unknown> }} Ui_Sync_Status_FromInputs */
/** @typedef {{}} Ui_Sync_Status_OkInputs */
/** @typedef {{}} Ui_Sync_Status_PausedInputs */
/** @typedef {{}} Ui_Sync_Status_RetryInputs */
/** @typedef {{}} Ui_Sync_Status_Sync_NowInputs */
/** @typedef {{}} Ui_Sync_Status_SyncingInputs */
/** @typedef {{ state: NonNullable<unknown>, source: NonNullable<unknown> }} Ui_Sync_Status_WithInputs */
/** @typedef {{}} Ui_Table_EmptyInputs */
/** @typedef {{ index: NonNullable<unknown> }} Ui_Table_Row_NameInputs */
/** @typedef {{}} Ui_Table_Select_AllInputs */
/** @typedef {{ name: NonNullable<unknown> }} Ui_Table_Select_RowInputs */
/** @typedef {{}} Ui_Thinking_Orb_AssemblingInputs */
/** @typedef {{}} Ui_Thinking_Orb_BreathingInputs */
/** @typedef {{}} Ui_Thinking_Orb_ComposingInputs */
/** @typedef {{}} Ui_Thinking_Orb_ConnectingInputs */
/** @typedef {{}} Ui_Thinking_Orb_ListeningInputs */
/** @typedef {{}} Ui_Thinking_Orb_SearchingInputs */
/** @typedef {{}} Ui_Thinking_Orb_ShapingInputs */
/** @typedef {{}} Ui_Thinking_Orb_SolvingInputs */
/** @typedef {{}} Ui_Thinking_Orb_WeavingInputs */
/** @typedef {{}} Ui_Thinking_Orb_WorkingInputs */
/** @typedef {{}} Ui_Thread_HintInputs */
/** @typedef {{}} Ui_Thread_LabelInputs */
/** @typedef {{}} Ui_Thread_PlaceholderInputs */
/** @typedef {{}} Ui_Thread_ReopenInputs */
/** @typedef {{}} Ui_Thread_ReplyInputs */
/** @typedef {{}} Ui_Thread_ResolveInputs */
/** @typedef {{}} Ui_Thread_SendInputs */
/** @typedef {{ label: NonNullable<unknown>, value: NonNullable<unknown>, limit: NonNullable<unknown> }} Ui_Threshold_Meter_AriaInputs */
/** @typedef {{ when: NonNullable<unknown> }} Ui_Threshold_Meter_ByInputs */
/** @typedef {{ context: NonNullable<unknown> }} Ui_Threshold_Meter_ContextInputs */
/** @typedef {{ when: NonNullable<unknown> }} Ui_Threshold_Meter_CrossesInputs */
/** @typedef {{}} Ui_Threshold_Meter_LabelInputs */
/** @typedef {{}} Ui_Threshold_Meter_LimitInputs */
/** @typedef {{ limit: NonNullable<unknown> }} Ui_Threshold_Meter_OfInputs */
/** @typedef {{}} Ui_Threshold_Meter_OverInputs */
/** @typedef {{ value: NonNullable<unknown> }} Ui_Threshold_Meter_ProjectedInputs */
/** @typedef {{ percent: NonNullable<unknown> }} Ui_Threshold_Meter_UsedInputs */
/** @typedef {{}} Ui_Threshold_Meter_WithinInputs */
/** @typedef {{}} Ui_Time_Picker_InvalidInputs */
/** @typedef {{}} Ui_Time_Picker_ListInputs */
/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Ui_Time_Picker_Out_Of_RangeInputs */
/** @typedef {{}} Ui_Time_Picker_PlaceholderInputs */
/** @typedef {{ status: NonNullable<unknown> }} Ui_Timeline_StatusInputs */
/** @typedef {{}} Ui_Timeline_Tone_ActiveInputs */
/** @typedef {{}} Ui_Timeline_Tone_DangerInputs */
/** @typedef {{}} Ui_Timeline_Tone_PendingInputs */
/** @typedef {{}} Ui_Timeline_Tone_SkippedInputs */
/** @typedef {{}} Ui_Timeline_Tone_SuccessInputs */
/** @typedef {{}} Ui_Timeline_Tone_WarningInputs */
/** @typedef {{}} Ui_Timeline_UnknownInputs */
/** @typedef {{}} Ui_Toast_DismissInputs */
/** @typedef {{ value: NonNullable<unknown> }} Ui_Tokens_CountInputs */
/** @typedef {{}} Ui_Top_Bar_BreadcrumbInputs */
/** @typedef {{}} Ui_Uptime_DegradedInputs */
/** @typedef {{}} Ui_Uptime_DownInputs */
/** @typedef {{}} Ui_Uptime_LabelInputs */
/** @typedef {{}} Ui_Uptime_NoneInputs */
/** @typedef {{}} Ui_Uptime_OkInputs */
/** @typedef {{ title: NonNullable<unknown>, ok: NonNullable<unknown>, degraded: NonNullable<unknown>, down: NonNullable<unknown> }} Ui_Uptime_SummaryInputs */
/** @typedef {{}} Ui_Uptime_TitleInputs */
/** @typedef {{}} Ui_Uptime_TodayInputs */
/** @typedef {{}} Ui_Version_List_ComparingInputs */
/** @typedef {{}} Ui_Version_List_DraftInputs */
/** @typedef {{}} Ui_Version_List_LabelInputs */
/** @typedef {{}} Ui_Version_List_LiveInputs */
import * as __en from "./en.js"
/**
* | output |
* | --- |
* | "Show menu" |
*
* @param {Ui_App_Shell_Expand_MenuInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_app_shell_expand_menu = /** @type {((inputs?: Ui_App_Shell_Expand_MenuInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_App_Shell_Expand_MenuInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_app_shell_expand_menu(inputs)
});
/**
* | output |
* | --- |
* | "Main menu" |
*
* @param {Ui_App_Shell_MenuInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_app_shell_menu = /** @type {((inputs?: Ui_App_Shell_MenuInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_App_Shell_MenuInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_app_shell_menu(inputs)
});
/**
* | output |
* | --- |
* | "Open menu" |
*
* @param {Ui_App_Shell_Open_MenuInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_app_shell_open_menu = /** @type {((inputs?: Ui_App_Shell_Open_MenuInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_App_Shell_Open_MenuInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_app_shell_open_menu(inputs)
});
/**
* | output |
* | --- |
* | "{count} people here: {names}" |
*
* @param {Ui_Avatar_Stack_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_avatar_stack_label = /** @type {((inputs: Ui_Avatar_Stack_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Avatar_Stack_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_avatar_stack_label(inputs)
});
/**
* | output |
* | --- |
* | "+{count}" |
*
* @param {Ui_Avatar_Stack_MoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_avatar_stack_more = /** @type {((inputs: Ui_Avatar_Stack_MoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Avatar_Stack_MoreInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_avatar_stack_more(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} item" |
* | "other" | "{count} items" |
*
* @param {Ui_Badge_CountInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_badge_count = /** @type {((inputs: Ui_Badge_CountInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Badge_CountInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_badge_count(inputs)
});
/**
* | output |
* | --- |
* | "New" |
*
* @param {Ui_Badge_NewInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_badge_new = /** @type {((inputs?: Ui_Badge_NewInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Badge_NewInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_badge_new(inputs)
});
/**
* | output |
* | --- |
* | "{max}+" |
*
* @param {Ui_Badge_OverflowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_badge_overflow = /** @type {((inputs: Ui_Badge_OverflowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Badge_OverflowInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_badge_overflow(inputs)
});
/**
* | output |
* | --- |
* | "Chart data" |
*
* @param {Ui_Bar_Chart_CaptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bar_chart_caption = /** @type {((inputs?: Ui_Bar_Chart_CaptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bar_Chart_CaptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bar_chart_caption(inputs)
});
/**
* | output |
* | --- |
* | "Total" |
*
* @param {Ui_Bar_Chart_TotalInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bar_chart_total = /** @type {((inputs?: Ui_Bar_Chart_TotalInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bar_Chart_TotalInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bar_chart_total(inputs)
});
/**
* | output |
* | --- |
* | "Value" |
*
* @param {Ui_Bar_Chart_ValueInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bar_chart_value = /** @type {((inputs?: Ui_Bar_Chart_ValueInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bar_Chart_ValueInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bar_chart_value(inputs)
});
/**
* | output |
* | --- |
* | "Assembly" |
*
* @param {Ui_Brand_NameInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_brand_name = /** @type {((inputs?: Ui_Brand_NameInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Brand_NameInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_brand_name(inputs)
});
/**
* | output |
* | --- |
* | "{count} more" |
*
* @param {Ui_Breakdown_MoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_breakdown_more = /** @type {((inputs: Ui_Breakdown_MoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Breakdown_MoreInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_breakdown_more(inputs)
});
/**
* | output |
* | --- |
* | "Other" |
*
* @param {Ui_Breakdown_OtherInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_breakdown_other = /** @type {((inputs?: Ui_Breakdown_OtherInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Breakdown_OtherInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_breakdown_other(inputs)
});
/**
* | output |
* | --- |
* | "<1%" |
*
* @param {Ui_Breakdown_Under_OneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_breakdown_under_one = /** @type {((inputs?: Ui_Breakdown_Under_OneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Breakdown_Under_OneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_breakdown_under_one(inputs)
});
/**
* | output |
* | --- |
* | "Clear selection" |
*
* @param {Ui_Bulk_Bar_ClearInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bulk_bar_clear = /** @type {((inputs?: Ui_Bulk_Bar_ClearInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bulk_Bar_ClearInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bulk_bar_clear(inputs)
});
/**
* | output |
* | --- |
* | "Bulk actions" |
*
* @param {Ui_Bulk_Bar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bulk_bar_label = /** @type {((inputs?: Ui_Bulk_Bar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bulk_Bar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bulk_bar_label(inputs)
});
/**
* | output |
* | --- |
* | "items" |
*
* @param {Ui_Bulk_Bar_NounInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bulk_bar_noun = /** @type {((inputs?: Ui_Bulk_Bar_NounInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bulk_Bar_NounInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bulk_bar_noun(inputs)
});
/**
* | output |
* | --- |
* | "Select all {total} matching" |
*
* @param {Ui_Bulk_Bar_Select_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bulk_bar_select_all = /** @type {((inputs: Ui_Bulk_Bar_Select_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bulk_Bar_Select_AllInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bulk_bar_select_all(inputs)
});
/**
* | output |
* | --- |
* | "{noun} selected" |
*
* @param {Ui_Bulk_Bar_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_bulk_bar_selected = /** @type {((inputs: Ui_Bulk_Bar_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Bulk_Bar_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_bulk_bar_selected(inputs)
});
/**
* | output |
* | --- |
* | "Next month" |
*
* @param {Ui_Calendar_NextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_calendar_next = /** @type {((inputs?: Ui_Calendar_NextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Calendar_NextInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_calendar_next(inputs)
});
/**
* | output |
* | --- |
* | "Previous month" |
*
* @param {Ui_Calendar_PreviousInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_calendar_previous = /** @type {((inputs?: Ui_Calendar_PreviousInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Calendar_PreviousInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_calendar_previous(inputs)
});
/**
* | output |
* | --- |
* | "{date} (today)" |
*
* @param {Ui_Calendar_TodayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_calendar_today = /** @type {((inputs: Ui_Calendar_TodayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Calendar_TodayInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_calendar_today(inputs)
});
/**
* | output |
* | --- |
* | "Path" |
*
* @param {Ui_Canvas_Breadcrumbs_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_breadcrumbs_label = /** @type {((inputs?: Ui_Canvas_Breadcrumbs_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Breadcrumbs_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_breadcrumbs_label(inputs)
});
/**
* | output |
* | --- |
* | "Exit full screen" |
*
* @param {Ui_Canvas_Toolbar_Exit_Full_ScreenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_exit_full_screen = /** @type {((inputs?: Ui_Canvas_Toolbar_Exit_Full_ScreenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_Exit_Full_ScreenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_exit_full_screen(inputs)
});
/**
* | output |
* | --- |
* | "Fit to screen" |
*
* @param {Ui_Canvas_Toolbar_FitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_fit = /** @type {((inputs?: Ui_Canvas_Toolbar_FitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_FitInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_fit(inputs)
});
/**
* | output |
* | --- |
* | "Show data flow" |
*
* @param {Ui_Canvas_Toolbar_FlowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_flow = /** @type {((inputs?: Ui_Canvas_Toolbar_FlowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_FlowInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_flow(inputs)
});
/**
* | output |
* | --- |
* | "Hide data flow" |
*
* @param {Ui_Canvas_Toolbar_Flow_OffInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_flow_off = /** @type {((inputs?: Ui_Canvas_Toolbar_Flow_OffInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_Flow_OffInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_flow_off(inputs)
});
/**
* | output |
* | --- |
* | "Full screen" |
*
* @param {Ui_Canvas_Toolbar_Full_ScreenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_full_screen = /** @type {((inputs?: Ui_Canvas_Toolbar_Full_ScreenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_Full_ScreenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_full_screen(inputs)
});
/**
* | output |
* | --- |
* | "Canvas controls" |
*
* @param {Ui_Canvas_Toolbar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_label = /** @type {((inputs?: Ui_Canvas_Toolbar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_label(inputs)
});
/**
* | output |
* | --- |
* | "Redo" |
*
* @param {Ui_Canvas_Toolbar_RedoInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_redo = /** @type {((inputs?: Ui_Canvas_Toolbar_RedoInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_RedoInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_redo(inputs)
});
/**
* | output |
* | --- |
* | "Tidy up" |
*
* @param {Ui_Canvas_Toolbar_TidyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_tidy = /** @type {((inputs?: Ui_Canvas_Toolbar_TidyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_TidyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_tidy(inputs)
});
/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Ui_Canvas_Toolbar_UndoInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_undo = /** @type {((inputs?: Ui_Canvas_Toolbar_UndoInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_UndoInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_undo(inputs)
});
/**
* | output |
* | --- |
* | "Zoom in" |
*
* @param {Ui_Canvas_Toolbar_Zoom_InInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_zoom_in = /** @type {((inputs?: Ui_Canvas_Toolbar_Zoom_InInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_Zoom_InInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_zoom_in(inputs)
});
/**
* | output |
* | --- |
* | "Zoom out" |
*
* @param {Ui_Canvas_Toolbar_Zoom_OutInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_canvas_toolbar_zoom_out = /** @type {((inputs?: Ui_Canvas_Toolbar_Zoom_OutInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Canvas_Toolbar_Zoom_OutInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_canvas_toolbar_zoom_out(inputs)
});
/**
* | output |
* | --- |
* | "Primary" |
*
* @param {Ui_Chain_FirstInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_chain_first = /** @type {((inputs?: Ui_Chain_FirstInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Chain_FirstInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_chain_first(inputs)
});
/**
* | output |
* | --- |
* | "Order" |
*
* @param {Ui_Chain_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_chain_label = /** @type {((inputs?: Ui_Chain_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Chain_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_chain_label(inputs)
});
/**
* | output |
* | --- |
* | "Fallback {n}" |
*
* @param {Ui_Chain_RankInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_chain_rank = /** @type {((inputs: Ui_Chain_RankInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Chain_RankInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_chain_rank(inputs)
});
/**
* | output |
* | --- |
* | "Then" |
*
* @param {Ui_Chain_ThenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_chain_then = /** @type {((inputs?: Ui_Chain_ThenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Chain_ThenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_chain_then(inputs)
});
/**
* | output |
* | --- |
* | "Apply changes" |
*
* @param {Ui_Change_Preview_ApplyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_apply = /** @type {((inputs?: Ui_Change_Preview_ApplyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_ApplyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_apply(inputs)
});
/**
* | output |
* | --- |
* | "Applying…" |
*
* @param {Ui_Change_Preview_ApplyingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_applying = /** @type {((inputs?: Ui_Change_Preview_ApplyingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_ApplyingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_applying(inputs)
});
/**
* | output |
* | --- |
* | "Applying" |
*
* @param {Ui_Change_Preview_Applying_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_applying_label = /** @type {((inputs?: Ui_Change_Preview_Applying_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_Applying_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_applying_label(inputs)
});
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ui_Change_Preview_CancelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_cancel = /** @type {((inputs?: Ui_Change_Preview_CancelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_CancelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_cancel(inputs)
});
/**
* | output |
* | --- |
* | "Nothing changes." |
*
* @param {Ui_Change_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_empty = /** @type {((inputs?: Ui_Change_Preview_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_empty(inputs)
});
/**
* | output |
* | --- |
* | "Show fewer" |
*
* @param {Ui_Change_Preview_FewerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_fewer = /** @type {((inputs?: Ui_Change_Preview_FewerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_FewerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_fewer(inputs)
});
/**
* | output |
* | --- |
* | "Show {count} more" |
*
* @param {Ui_Change_Preview_MoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_change_preview_more = /** @type {((inputs: Ui_Change_Preview_MoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Change_Preview_MoreInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_change_preview_more(inputs)
});
/**
* | output |
* | --- |
* | "Apply suggested fix" |
*
* @param {Ui_Check_Report_Auto_FixInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_auto_fix = /** @type {((inputs?: Ui_Check_Report_Auto_FixInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Auto_FixInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_auto_fix(inputs)
});
/**
* | output |
* | --- |
* | "Blocked" |
*
* @param {Ui_Check_Report_BlockedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_blocked = /** @type {((inputs?: Ui_Check_Report_BlockedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_BlockedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_blocked(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} blocking item" |
* | "other" | "{count} blocking items" |
*
* @param {Ui_Check_Report_BlockingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_blocking = /** @type {((inputs: Ui_Check_Report_BlockingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_BlockingInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_blocking(inputs)
});
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ui_Check_Report_CancelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_cancel = /** @type {((inputs?: Ui_Check_Report_CancelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_CancelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_cancel(inputs)
});
/**
* | output |
* | --- |
* | "Nothing here." |
*
* @param {Ui_Check_Report_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_empty = /** @type {((inputs?: Ui_Check_Report_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_empty(inputs)
});
/**
* | output |
* | --- |
* | "Nothing open. Every item is resolved or waived." |
*
* @param {Ui_Check_Report_Empty_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_empty_open = /** @type {((inputs?: Ui_Check_Report_Empty_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Empty_OpenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_empty_open(inputs)
});
/**
* | output |
* | --- |
* | "All" |
*
* @param {Ui_Check_Report_Filter_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_filter_all = /** @type {((inputs?: Ui_Check_Report_Filter_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Filter_AllInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_filter_all(inputs)
});
/**
* | output |
* | --- |
* | "Resolved & waived {count}" |
*
* @param {Ui_Check_Report_Filter_ClosedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_filter_closed = /** @type {((inputs: Ui_Check_Report_Filter_ClosedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Filter_ClosedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_filter_closed(inputs)
});
/**
* | output |
* | --- |
* | "Open {count}" |
*
* @param {Ui_Check_Report_Filter_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_filter_open = /** @type {((inputs: Ui_Check_Report_Filter_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Filter_OpenInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_filter_open(inputs)
});
/**
* | output |
* | --- |
* | "Check" |
*
* @param {Ui_Check_Report_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_label = /** @type {((inputs?: Ui_Check_Report_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_label(inputs)
});
/**
* | output |
* | --- |
* | "Nothing open" |
*
* @param {Ui_Check_Report_None_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_none_open = /** @type {((inputs?: Ui_Check_Report_None_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_None_OpenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_none_open(inputs)
});
/**
* | output |
* | --- |
* | "{level} items can’t be waived." |
*
* @param {Ui_Check_Report_Not_WaivableInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_not_waivable = /** @type {((inputs: Ui_Check_Report_Not_WaivableInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Not_WaivableInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_not_waivable(inputs)
});
/**
* | output |
* | --- |
* | "Open" |
*
* @param {Ui_Check_Report_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_open = /** @type {((inputs?: Ui_Check_Report_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_OpenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_open(inputs)
});
/**
* | output |
* | --- |
* | "Passed" |
*
* @param {Ui_Check_Report_PassedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_passed = /** @type {((inputs?: Ui_Check_Report_PassedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_PassedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_passed(inputs)
});
/**
* | output |
* | --- |
* | "Ready" |
*
* @param {Ui_Check_Report_Passed_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_passed_title = /** @type {((inputs?: Ui_Check_Report_Passed_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Passed_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_passed_title(inputs)
});
/**
* | output |
* | --- |
* | "Reopen" |
*
* @param {Ui_Check_Report_ReopenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_reopen = /** @type {((inputs?: Ui_Check_Report_ReopenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_ReopenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_reopen(inputs)
});
/**
* | output |
* | --- |
* | "Mark resolved" |
*
* @param {Ui_Check_Report_ResolveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_resolve = /** @type {((inputs?: Ui_Check_Report_ResolveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_ResolveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_resolve(inputs)
});
/**
* | output |
* | --- |
* | "Resolved" |
*
* @param {Ui_Check_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_resolved = /** @type {((inputs?: Ui_Check_Report_ResolvedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_ResolvedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_resolved(inputs)
});
/**
* | output |
* | --- |
* | "Running" |
*
* @param {Ui_Check_Report_RunningInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_running = /** @type {((inputs?: Ui_Check_Report_RunningInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_RunningInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_running(inputs)
});
/**
* | output |
* | --- |
* | "Checking…" |
*
* @param {Ui_Check_Report_Running_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_running_title = /** @type {((inputs?: Ui_Check_Report_Running_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Running_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_running_title(inputs)
});
/**
* | output |
* | --- |
* | "Show" |
*
* @param {Ui_Check_Report_ShowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_show = /** @type {((inputs?: Ui_Check_Report_ShowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_ShowInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_show(inputs)
});
/**
* | output |
* | --- |
* | "Suggested fix" |
*
* @param {Ui_Check_Report_SuggestionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_suggestion = /** @type {((inputs?: Ui_Check_Report_SuggestionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_SuggestionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_suggestion(inputs)
});
/**
* | output |
* | --- |
* | "Waive…" |
*
* @param {Ui_Check_Report_WaiveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waive = /** @type {((inputs?: Ui_Check_Report_WaiveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_WaiveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waive(inputs)
});
/**
* | output |
* | --- |
* | "Waive" |
*
* @param {Ui_Check_Report_Waive_ConfirmInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waive_confirm = /** @type {((inputs?: Ui_Check_Report_Waive_ConfirmInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Waive_ConfirmInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waive_confirm(inputs)
});
/**
* | output |
* | --- |
* | "Waivers are logged with your name and shown here." |
*
* @param {Ui_Check_Report_Waive_HelperInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waive_helper = /** @type {((inputs?: Ui_Check_Report_Waive_HelperInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Waive_HelperInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waive_helper(inputs)
});
/**
* | output |
* | --- |
* | "Why is it safe to go ahead?" |
*
* @param {Ui_Check_Report_Waive_QuestionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waive_question = /** @type {((inputs?: Ui_Check_Report_Waive_QuestionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Waive_QuestionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waive_question(inputs)
});
/**
* | output |
* | --- |
* | "Waived" |
*
* @param {Ui_Check_Report_WaivedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waived = /** @type {((inputs?: Ui_Check_Report_WaivedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_WaivedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waived(inputs)
});
/**
* | output |
* | --- |
* | "Waived by {by}: “{reason}”" |
*
* @param {Ui_Check_Report_Waived_ByInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_check_report_waived_by = /** @type {((inputs: Ui_Check_Report_Waived_ByInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Check_Report_Waived_ByInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_check_report_waived_by(inputs)
});
/**
* | output |
* | --- |
* | "All done" |
*
* @param {Ui_Checklist_All_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_all_done = /** @type {((inputs?: Ui_Checklist_All_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_All_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_all_done(inputs)
});
/**
* | output |
* | --- |
* | "{done} of {total} done" |
*
* @param {Ui_Checklist_CountInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_count = /** @type {((inputs: Ui_Checklist_CountInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_CountInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_count(inputs)
});
/**
* | output |
* | --- |
* | "Hide checklist" |
*
* @param {Ui_Checklist_DismissInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_dismiss = /** @type {((inputs?: Ui_Checklist_DismissInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_DismissInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_dismiss(inputs)
});
/**
* | output |
* | --- |
* | "Progress" |
*
* @param {Ui_Checklist_ProgressInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_progress = /** @type {((inputs?: Ui_Checklist_ProgressInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_ProgressInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_progress(inputs)
});
/**
* | output |
* | --- |
* | "(done)" |
*
* @param {Ui_Checklist_Step_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_step_done = /** @type {((inputs?: Ui_Checklist_Step_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_Step_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_step_done(inputs)
});
/**
* | output |
* | --- |
* | "Getting started" |
*
* @param {Ui_Checklist_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_checklist_title = /** @type {((inputs?: Ui_Checklist_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Checklist_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_checklist_title(inputs)
});
/**
* | output |
* | --- |
* | "Choose" |
*
* @param {Ui_Choice_Card_ChooseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_choice_card_choose = /** @type {((inputs?: Ui_Choice_Card_ChooseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Choice_Card_ChooseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_choice_card_choose(inputs)
});
/**
* | output |
* | --- |
* | "Selected" |
*
* @param {Ui_Choice_Card_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_choice_card_selected = /** @type {((inputs?: Ui_Choice_Card_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Choice_Card_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_choice_card_selected(inputs)
});
/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Ui_Choice_Card_TagsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_choice_card_tags = /** @type {((inputs?: Ui_Choice_Card_TagsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Choice_Card_TagsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_choice_card_tags(inputs)
});
/**
* | output |
* | --- |
* | "Failing" |
*
* @param {Ui_Clause_List_FailInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_clause_list_fail = /** @type {((inputs?: Ui_Clause_List_FailInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Clause_List_FailInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_clause_list_fail(inputs)
});
/**
* | output |
* | --- |
* | "Criteria" |
*
* @param {Ui_Clause_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_clause_list_label = /** @type {((inputs?: Ui_Clause_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Clause_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_clause_list_label(inputs)
});
/**
* | output |
* | --- |
* | "No check yet" |
*
* @param {Ui_Clause_List_NoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_clause_list_none = /** @type {((inputs?: Ui_Clause_List_NoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Clause_List_NoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_clause_list_none(inputs)
});
/**
* | output |
* | --- |
* | "Passing" |
*
* @param {Ui_Clause_List_PassInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_clause_list_pass = /** @type {((inputs?: Ui_Clause_List_PassInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Clause_List_PassInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_clause_list_pass(inputs)
});
/**
* | output |
* | --- |
* | "Digit {index} of {length}" |
*
* @param {Ui_Code_Input_DigitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_code_input_digit = /** @type {((inputs: Ui_Code_Input_DigitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Code_Input_DigitInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_code_input_digit(inputs)
});
/**
* | output |
* | --- |
* | "Verification code" |
*
* @param {Ui_Code_Input_Group_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_code_input_group_label = /** @type {((inputs?: Ui_Code_Input_Group_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Code_Input_Group_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_code_input_group_label(inputs)
});
/**
* | output |
* | --- |
* | "No matches for “{query}”" |
*
* @param {Ui_Combobox_No_MatchesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_combobox_no_matches = /** @type {((inputs: Ui_Combobox_No_MatchesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Combobox_No_MatchesInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_combobox_no_matches(inputs)
});
/**
* | output |
* | --- |
* | "Search…" |
*
* @param {Ui_Combobox_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_combobox_placeholder = /** @type {((inputs?: Ui_Combobox_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Combobox_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_combobox_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Comparison" |
*
* @param {Ui_Compare_Fields_CaptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_caption = /** @type {((inputs?: Ui_Compare_Fields_CaptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_CaptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_caption(inputs)
});
/**
* | output |
* | --- |
* | "Field" |
*
* @param {Ui_Compare_Fields_FieldInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_field = /** @type {((inputs?: Ui_Compare_Fields_FieldInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_FieldInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_field(inputs)
});
/**
* | output |
* | --- |
* | "Match" |
*
* @param {Ui_Compare_Fields_MatchInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_match = /** @type {((inputs?: Ui_Compare_Fields_MatchInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_MatchInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_match(inputs)
});
/**
* | output |
* | --- |
* | "Mismatch" |
*
* @param {Ui_Compare_Fields_MismatchInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_mismatch = /** @type {((inputs?: Ui_Compare_Fields_MismatchInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_MismatchInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_mismatch(inputs)
});
/**
* | output |
* | --- |
* | "Only on one side" |
*
* @param {Ui_Compare_Fields_NewInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_new = /** @type {((inputs?: Ui_Compare_Fields_NewInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_NewInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_new(inputs)
});
/**
* | output |
* | --- |
* | "Removed" |
*
* @param {Ui_Compare_Fields_RemovedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_removed = /** @type {((inputs?: Ui_Compare_Fields_RemovedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_RemovedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_removed(inputs)
});
/**
* | output |
* | --- |
* | "Result" |
*
* @param {Ui_Compare_Fields_ResultInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_result = /** @type {((inputs?: Ui_Compare_Fields_ResultInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_ResultInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_result(inputs)
});
/**
* | output |
* | --- |
* | "Within tolerance" |
*
* @param {Ui_Compare_Fields_WithinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_compare_fields_within = /** @type {((inputs?: Ui_Compare_Fields_WithinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Compare_Fields_WithinInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_compare_fields_within(inputs)
});
/**
* | output |
* | --- |
* | "and" |
*
* @param {Ui_Condition_AndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_and = /** @type {((inputs?: Ui_Condition_AndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_AndInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_and(inputs)
});
/**
* | output |
* | --- |
* | "is checked" |
*
* @param {Ui_Condition_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_checked = /** @type {((inputs?: Ui_Condition_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_checked(inputs)
});
/**
* | output |
* | --- |
* | "contains" |
*
* @param {Ui_Condition_ContainsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_contains = /** @type {((inputs?: Ui_Condition_ContainsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_ContainsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_contains(inputs)
});
/**
* | output |
* | --- |
* | "is empty" |
*
* @param {Ui_Condition_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_empty = /** @type {((inputs?: Ui_Condition_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_empty(inputs)
});
/**
* | output |
* | --- |
* | "is filled in" |
*
* @param {Ui_Condition_FilledInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_filled = /** @type {((inputs?: Ui_Condition_FilledInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_FilledInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_filled(inputs)
});
/**
* | output |
* | --- |
* | "is more than" |
*
* @param {Ui_Condition_GtInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_gt = /** @type {((inputs?: Ui_Condition_GtInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_GtInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_gt(inputs)
});
/**
* | output |
* | --- |
* | "is" |
*
* @param {Ui_Condition_IsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_is = /** @type {((inputs?: Ui_Condition_IsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_IsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_is(inputs)
});
/**
* | output |
* | --- |
* | "is less than" |
*
* @param {Ui_Condition_LtInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_lt = /** @type {((inputs?: Ui_Condition_LtInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_LtInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_lt(inputs)
});
/**
* | output |
* | --- |
* | "is not" |
*
* @param {Ui_Condition_NotInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_not = /** @type {((inputs?: Ui_Condition_NotInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_NotInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_not(inputs)
});
/**
* | output |
* | --- |
* | "is not checked" |
*
* @param {Ui_Condition_Not_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_condition_not_checked = /** @type {((inputs?: Ui_Condition_Not_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Condition_Not_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_condition_not_checked(inputs)
});
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ui_Confirm_Dialog_CancelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_confirm_dialog_cancel = /** @type {((inputs?: Ui_Confirm_Dialog_CancelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Confirm_Dialog_CancelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_confirm_dialog_cancel(inputs)
});
/**
* | output |
* | --- |
* | "Confirm" |
*
* @param {Ui_Confirm_Dialog_ConfirmInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_confirm_dialog_confirm = /** @type {((inputs?: Ui_Confirm_Dialog_ConfirmInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Confirm_Dialog_ConfirmInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_confirm_dialog_confirm(inputs)
});
/**
* | output |
* | --- |
* | "Type {phrase} to confirm" |
*
* @param {Ui_Confirm_Dialog_Type_To_ConfirmInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_confirm_dialog_type_to_confirm = /** @type {((inputs: Ui_Confirm_Dialog_Type_To_ConfirmInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Confirm_Dialog_Type_To_ConfirmInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_confirm_dialog_type_to_confirm(inputs)
});
/**
* | output |
* | --- |
* | "Copied to clipboard" |
*
* @param {Ui_Copy_Field_AnnounceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_copy_field_announce = /** @type {((inputs?: Ui_Copy_Field_AnnounceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Copy_Field_AnnounceInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_copy_field_announce(inputs)
});
/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Ui_Copy_Field_CopiedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_copy_field_copied = /** @type {((inputs?: Ui_Copy_Field_CopiedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Copy_Field_CopiedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_copy_field_copied(inputs)
});
/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Ui_Copy_Field_CopyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_copy_field_copy = /** @type {((inputs?: Ui_Copy_Field_CopyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Copy_Field_CopyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_copy_field_copy(inputs)
});
/**
* | output |
* | --- |
* | "Copy {name}" |
*
* @param {Ui_Copy_Field_Copy_NamedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_copy_field_copy_named = /** @type {((inputs: Ui_Copy_Field_Copy_NamedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Copy_Field_Copy_NamedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_copy_field_copy_named(inputs)
});
/**
* | output |
* | --- |
* | "End now" |
*
* @param {Ui_Countdown_Bar_EndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_countdown_bar_end = /** @type {((inputs?: Ui_Countdown_Bar_EndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Countdown_Bar_EndInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_countdown_bar_end(inputs)
});
/**
* | output |
* | --- |
* | "Ask for more time" |
*
* @param {Ui_Countdown_Bar_ExtendInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_countdown_bar_extend = /** @type {((inputs?: Ui_Countdown_Bar_ExtendInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Countdown_Bar_ExtendInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_countdown_bar_extend(inputs)
});
/**
* | output |
* | --- |
* | "Time remaining" |
*
* @param {Ui_Countdown_Bar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_countdown_bar_label = /** @type {((inputs?: Ui_Countdown_Bar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Countdown_Bar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_countdown_bar_label(inputs)
});
/**
* | output |
* | --- |
* | "Danger zone" |
*
* @param {Ui_Danger_Zone_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_danger_zone_title = /** @type {((inputs?: Ui_Danger_Zone_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Danger_Zone_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_danger_zone_title(inputs)
});
/**
* | output |
* | --- |
* | "Choose a date" |
*
* @param {Ui_Date_Picker_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_picker_label = /** @type {((inputs?: Ui_Date_Picker_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Picker_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_picker_label(inputs)
});
/**
* | output |
* | --- |
* | "Select a date" |
*
* @param {Ui_Date_Picker_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_picker_placeholder = /** @type {((inputs?: Ui_Date_Picker_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Picker_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_picker_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Today" |
*
* @param {Ui_Date_Picker_TodayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_picker_today = /** @type {((inputs?: Ui_Date_Picker_TodayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Picker_TodayInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_picker_today(inputs)
});
/**
* | output |
* | --- |
* | "Apply" |
*
* @param {Ui_Date_Range_Picker_ApplyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_apply = /** @type {((inputs?: Ui_Date_Range_Picker_ApplyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_ApplyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_apply(inputs)
});
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ui_Date_Range_Picker_CancelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_cancel = /** @type {((inputs?: Ui_Date_Range_Picker_CancelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_CancelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_cancel(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} day" |
* | "other" | "{count} days" |
*
* @param {Ui_Date_Range_Picker_DaysInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_days = /** @type {((inputs: Ui_Date_Range_Picker_DaysInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_DaysInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_days(inputs)
});
/**
* | output |
* | --- |
* | "Date range" |
*
* @param {Ui_Date_Range_Picker_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_label = /** @type {((inputs?: Ui_Date_Range_Picker_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_label(inputs)
});
/**
* | output |
* | --- |
* | "Last 30 days" |
*
* @param {Ui_Date_Range_Picker_Last_30Inputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_last_30 = /** @type {((inputs?: Ui_Date_Range_Picker_Last_30Inputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Last_30Inputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_last_30(inputs)
});
/**
* | output |
* | --- |
* | "Last 7 days" |
*
* @param {Ui_Date_Range_Picker_Last_7Inputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_last_7 = /** @type {((inputs?: Ui_Date_Range_Picker_Last_7Inputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Last_7Inputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_last_7(inputs)
});
/**
* | output |
* | --- |
* | "Last 90 days" |
*
* @param {Ui_Date_Range_Picker_Last_90Inputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_last_90 = /** @type {((inputs?: Ui_Date_Range_Picker_Last_90Inputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Last_90Inputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_last_90(inputs)
});
/**
* | output |
* | --- |
* | "Last month" |
*
* @param {Ui_Date_Range_Picker_Last_MonthInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_last_month = /** @type {((inputs?: Ui_Date_Range_Picker_Last_MonthInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Last_MonthInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_last_month(inputs)
});
/**
* | output |
* | --- |
* | "pick an end date" |
*
* @param {Ui_Date_Range_Picker_Pick_EndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_pick_end = /** @type {((inputs?: Ui_Date_Range_Picker_Pick_EndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Pick_EndInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_pick_end(inputs)
});
/**
* | output |
* | --- |
* | "Pick a start date" |
*
* @param {Ui_Date_Range_Picker_Pick_StartInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_pick_start = /** @type {((inputs?: Ui_Date_Range_Picker_Pick_StartInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Pick_StartInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_pick_start(inputs)
});
/**
* | output |
* | --- |
* | "Date range:" |
*
* @param {Ui_Date_Range_Picker_PrefixInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_prefix = /** @type {((inputs?: Ui_Date_Range_Picker_PrefixInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_PrefixInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_prefix(inputs)
});
/**
* | output |
* | --- |
* | "This month" |
*
* @param {Ui_Date_Range_Picker_This_MonthInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_this_month = /** @type {((inputs?: Ui_Date_Range_Picker_This_MonthInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_This_MonthInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_this_month(inputs)
});
/**
* | output |
* | --- |
* | "Times in {zone}" |
*
* @param {Ui_Date_Range_Picker_Time_ZoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_time_zone = /** @type {((inputs: Ui_Date_Range_Picker_Time_ZoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_Time_ZoneInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_time_zone(inputs)
});
/**
* | output |
* | --- |
* | "Today" |
*
* @param {Ui_Date_Range_Picker_TodayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_date_range_picker_today = /** @type {((inputs?: Ui_Date_Range_Picker_TodayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Date_Range_Picker_TodayInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_date_range_picker_today(inputs)
});
/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Ui_Decision_Panel_ApproveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_approve = /** @type {((inputs?: Ui_Decision_Panel_ApproveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_ApproveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_approve(inputs)
});
/**
* | output |
* | --- |
* | "approve ·" |
*
* @param {Ui_Decision_Panel_Key_ApproveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_key_approve = /** @type {((inputs?: Ui_Decision_Panel_Key_ApproveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_Key_ApproveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_key_approve(inputs)
});
/**
* | output |
* | --- |
* | "reject" |
*
* @param {Ui_Decision_Panel_Key_RejectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_key_reject = /** @type {((inputs?: Ui_Decision_Panel_Key_RejectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_Key_RejectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_key_reject(inputs)
});
/**
* | output |
* | --- |
* | "Decision: {title}" |
*
* @param {Ui_Decision_Panel_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_label = /** @type {((inputs: Ui_Decision_Panel_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_label(inputs)
});
/**
* | output |
* | --- |
* | "Note" |
*
* @param {Ui_Decision_Panel_NoteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_note = /** @type {((inputs?: Ui_Decision_Panel_NoteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_NoteInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_note(inputs)
});
/**
* | output |
* | --- |
* | "Add a note. Required to reject or send back." |
*
* @param {Ui_Decision_Panel_Note_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_note_placeholder = /** @type {((inputs?: Ui_Decision_Panel_Note_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_Note_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_note_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Proposal" |
*
* @param {Ui_Decision_Panel_ProposalInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_proposal = /** @type {((inputs?: Ui_Decision_Panel_ProposalInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_ProposalInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_proposal(inputs)
});
/**
* | output |
* | --- |
* | "“{note}”" |
*
* @param {Ui_Decision_Panel_QuoteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_quote = /** @type {((inputs: Ui_Decision_Panel_QuoteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_QuoteInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_quote(inputs)
});
/**
* | output |
* | --- |
* | "Why this needs you" |
*
* @param {Ui_Decision_Panel_ReasonInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_reason = /** @type {((inputs?: Ui_Decision_Panel_ReasonInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_ReasonInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_reason(inputs)
});
/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Ui_Decision_Panel_RejectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_reject = /** @type {((inputs?: Ui_Decision_Panel_RejectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_RejectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_reject(inputs)
});
/**
* | output |
* | --- |
* | "Send back" |
*
* @param {Ui_Decision_Panel_Send_BackInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_send_back = /** @type {((inputs?: Ui_Decision_Panel_Send_BackInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_Send_BackInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_send_back(inputs)
});
/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Ui_Decision_Panel_UndoInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_decision_panel_undo = /** @type {((inputs?: Ui_Decision_Panel_UndoInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Decision_Panel_UndoInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_decision_panel_undo(inputs)
});
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Ui_Detail_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_detail_list_label = /** @type {((inputs?: Ui_Detail_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Detail_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_detail_list_label(inputs)
});
/**
* | output |
* | --- |
* | "Required" |
*
* @param {Ui_Detail_List_LockedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_detail_list_locked = /** @type {((inputs?: Ui_Detail_List_LockedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Detail_List_LockedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_detail_list_locked(inputs)
});
/**
* | output |
* | --- |
* | "Diagram" |
*
* @param {Ui_Diagram_Canvas_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_canvas_label = /** @type {((inputs?: Ui_Diagram_Canvas_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Canvas_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_canvas_label(inputs)
});
/**
* | output |
* | --- |
* | "diagram editor" |
*
* @param {Ui_Diagram_Canvas_RoledescriptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_canvas_roledescription = /** @type {((inputs?: Ui_Diagram_Canvas_RoledescriptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Canvas_RoledescriptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_canvas_roledescription(inputs)
});
/**
* | output |
* | --- |
* | "{name} selected" |
*
* @param {Ui_Diagram_Canvas_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_canvas_selected = /** @type {((inputs: Ui_Diagram_Canvas_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Canvas_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_canvas_selected(inputs)
});
/**
* | output |
* | --- |
* | "{count} items selected" |
*
* @param {Ui_Diagram_Canvas_Selected_ManyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_canvas_selected_many = /** @type {((inputs: Ui_Diagram_Canvas_Selected_ManyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Canvas_Selected_ManyInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_canvas_selected_many(inputs)
});
/**
* | output |
* | --- |
* | "{first}, {second}" |
*
* @param {Ui_Diagram_Edge_AndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_and = /** @type {((inputs: Ui_Diagram_Edge_AndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_AndInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_and(inputs)
});
/**
* | output |
* | --- |
* | "{from} to {to}" |
*
* @param {Ui_Diagram_Edge_BetweenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_between = /** @type {((inputs: Ui_Diagram_Edge_BetweenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_BetweenInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_between(inputs)
});
/**
* | output |
* | --- |
* | "{between}: {description}" |
*
* @param {Ui_Diagram_Edge_DescribedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_described = /** @type {((inputs: Ui_Diagram_Edge_DescribedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_DescribedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_described(inputs)
});
/**
* | output |
* | --- |
* | "{label} at the end" |
*
* @param {Ui_Diagram_Edge_End_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_end_label = /** @type {((inputs: Ui_Diagram_Edge_End_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_End_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_end_label(inputs)
});
/**
* | output |
* | --- |
* | "{start} to {end}" |
*
* @param {Ui_Diagram_Edge_End_LabelsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_end_labels = /** @type {((inputs: Ui_Diagram_Edge_End_LabelsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_End_LabelsInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_end_labels(inputs)
});
/**
* | output |
* | --- |
* | "{label}, {technology}" |
*
* @param {Ui_Diagram_Edge_Label_TechnologyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_label_technology = /** @type {((inputs: Ui_Diagram_Edge_Label_TechnologyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_Label_TechnologyInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_label_technology(inputs)
});
/**
* | output |
* | --- |
* | "{label} at the start" |
*
* @param {Ui_Diagram_Edge_Start_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_start_label = /** @type {((inputs: Ui_Diagram_Edge_Start_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_Start_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_start_label(inputs)
});
/**
* | output |
* | --- |
* | "Connection" |
*
* @param {Ui_Diagram_Edge_UnnamedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_edge_unnamed = /** @type {((inputs?: Ui_Diagram_Edge_UnnamedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Edge_UnnamedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_edge_unnamed(inputs)
});
/**
* | output |
* | --- |
* | "{label} boundary" |
*
* @param {Ui_Diagram_Group_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_group_label = /** @type {((inputs: Ui_Diagram_Group_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Group_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_group_label(inputs)
});
/**
* | output |
* | --- |
* | "{label}, {type} boundary" |
*
* @param {Ui_Diagram_Group_Label_TypedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_group_label_typed = /** @type {((inputs: Ui_Diagram_Group_Label_TypedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Group_Label_TypedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_group_label_typed(inputs)
});
/**
* | output |
* | --- |
* | "selected" |
*
* @param {Ui_Diagram_Group_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_group_selected = /** @type {((inputs?: Ui_Diagram_Group_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Group_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_group_selected(inputs)
});
/**
* | output |
* | --- |
* | "Actor" |
*
* @param {Ui_Diagram_Kind_ActorInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_actor = /** @type {((inputs?: Ui_Diagram_Kind_ActorInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ActorInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_actor(inputs)
});
/**
* | output |
* | --- |
* | "AI agent" |
*
* @param {Ui_Diagram_Kind_Ai_AgentInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_ai_agent = /** @type {((inputs?: Ui_Diagram_Kind_Ai_AgentInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Ai_AgentInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_ai_agent(inputs)
});
/**
* | output |
* | --- |
* | "API gateway" |
*
* @param {Ui_Diagram_Kind_Api_GatewayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_api_gateway = /** @type {((inputs?: Ui_Diagram_Kind_Api_GatewayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Api_GatewayInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_api_gateway(inputs)
});
/**
* | output |
* | --- |
* | "Cache" |
*
* @param {Ui_Diagram_Kind_CacheInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_cache = /** @type {((inputs?: Ui_Diagram_Kind_CacheInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_CacheInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_cache(inputs)
});
/**
* | output |
* | --- |
* | "CDN" |
*
* @param {Ui_Diagram_Kind_CdnInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_cdn = /** @type {((inputs?: Ui_Diagram_Kind_CdnInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_CdnInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_cdn(inputs)
});
/**
* | output |
* | --- |
* | "Class" |
*
* @param {Ui_Diagram_Kind_ClassInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_class = /** @type {((inputs?: Ui_Diagram_Kind_ClassInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ClassInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_class(inputs)
});
/**
* | output |
* | --- |
* | "CLI" |
*
* @param {Ui_Diagram_Kind_CliInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_cli = /** @type {((inputs?: Ui_Diagram_Kind_CliInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_CliInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_cli(inputs)
});
/**
* | output |
* | --- |
* | "Component" |
*
* @param {Ui_Diagram_Kind_ComponentInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_component = /** @type {((inputs?: Ui_Diagram_Kind_ComponentInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ComponentInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_component(inputs)
});
/**
* | output |
* | --- |
* | "Container" |
*
* @param {Ui_Diagram_Kind_ContainerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_container = /** @type {((inputs?: Ui_Diagram_Kind_ContainerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ContainerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_container(inputs)
});
/**
* | output |
* | --- |
* | "Database" |
*
* @param {Ui_Diagram_Kind_DatabaseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_database = /** @type {((inputs?: Ui_Diagram_Kind_DatabaseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_DatabaseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_database(inputs)
});
/**
* | output |
* | --- |
* | "Deployment node" |
*
* @param {Ui_Diagram_Kind_Deployment_NodeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_deployment_node = /** @type {((inputs?: Ui_Diagram_Kind_Deployment_NodeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Deployment_NodeInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_deployment_node(inputs)
});
/**
* | output |
* | --- |
* | "Desktop app" |
*
* @param {Ui_Diagram_Kind_Desktop_AppInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_desktop_app = /** @type {((inputs?: Ui_Diagram_Kind_Desktop_AppInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Desktop_AppInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_desktop_app(inputs)
});
/**
* | output |
* | --- |
* | "Document" |
*
* @param {Ui_Diagram_Kind_DocumentInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_document = /** @type {((inputs?: Ui_Diagram_Kind_DocumentInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_DocumentInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_document(inputs)
});
/**
* | output |
* | --- |
* | "Email and notifications" |
*
* @param {Ui_Diagram_Kind_EmailInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_email = /** @type {((inputs?: Ui_Diagram_Kind_EmailInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_EmailInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_email(inputs)
});
/**
* | output |
* | --- |
* | "Enumeration" |
*
* @param {Ui_Diagram_Kind_EnumInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_enum = /** @type {((inputs?: Ui_Diagram_Kind_EnumInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_EnumInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_enum(inputs)
});
/**
* | output |
* | --- |
* | "External API" |
*
* @param {Ui_Diagram_Kind_External_ApiInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_external_api = /** @type {((inputs?: Ui_Diagram_Kind_External_ApiInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_External_ApiInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_external_api(inputs)
});
/**
* | output |
* | --- |
* | "External system" |
*
* @param {Ui_Diagram_Kind_External_SystemInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_external_system = /** @type {((inputs?: Ui_Diagram_Kind_External_SystemInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_External_SystemInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_external_system(inputs)
});
/**
* | output |
* | --- |
* | "File store" |
*
* @param {Ui_Diagram_Kind_File_StoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_file_store = /** @type {((inputs?: Ui_Diagram_Kind_File_StoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_File_StoreInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_file_store(inputs)
});
/**
* | output |
* | --- |
* | "Final state" |
*
* @param {Ui_Diagram_Kind_Final_StateInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_final_state = /** @type {((inputs?: Ui_Diagram_Kind_Final_StateInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Final_StateInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_final_state(inputs)
});
/**
* | output |
* | --- |
* | "Fork or join" |
*
* @param {Ui_Diagram_Kind_Fork_JoinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_fork_join = /** @type {((inputs?: Ui_Diagram_Kind_Fork_JoinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Fork_JoinInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_fork_join(inputs)
});
/**
* | output |
* | --- |
* | "Function" |
*
* @param {Ui_Diagram_Kind_FunctionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_function = /** @type {((inputs?: Ui_Diagram_Kind_FunctionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_FunctionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_function(inputs)
});
/**
* | output |
* | --- |
* | "C4" |
*
* @param {Ui_Diagram_Kind_Group_C4Inputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_c4 = /** @type {((inputs?: Ui_Diagram_Kind_Group_C4Inputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_C4Inputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_c4(inputs)
});
/**
* | output |
* | --- |
* | "Clients" |
*
* @param {Ui_Diagram_Kind_Group_ClientsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_clients = /** @type {((inputs?: Ui_Diagram_Kind_Group_ClientsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_ClientsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_clients(inputs)
});
/**
* | output |
* | --- |
* | "Compute" |
*
* @param {Ui_Diagram_Kind_Group_ComputeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_compute = /** @type {((inputs?: Ui_Diagram_Kind_Group_ComputeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_ComputeInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_compute(inputs)
});
/**
* | output |
* | --- |
* | "Data" |
*
* @param {Ui_Diagram_Kind_Group_DataInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_data = /** @type {((inputs?: Ui_Diagram_Kind_Group_DataInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_DataInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_data(inputs)
});
/**
* | output |
* | --- |
* | "Network" |
*
* @param {Ui_Diagram_Kind_Group_NetworkInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_network = /** @type {((inputs?: Ui_Diagram_Kind_Group_NetworkInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_NetworkInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_network(inputs)
});
/**
* | output |
* | --- |
* | "Other" |
*
* @param {Ui_Diagram_Kind_Group_OtherInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_other = /** @type {((inputs?: Ui_Diagram_Kind_Group_OtherInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_OtherInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_other(inputs)
});
/**
* | output |
* | --- |
* | "UML" |
*
* @param {Ui_Diagram_Kind_Group_UmlInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_group_uml = /** @type {((inputs?: Ui_Diagram_Kind_Group_UmlInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Group_UmlInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_group_uml(inputs)
});
/**
* | output |
* | --- |
* | "Identity provider" |
*
* @param {Ui_Diagram_Kind_Identity_ProviderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_identity_provider = /** @type {((inputs?: Ui_Diagram_Kind_Identity_ProviderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Identity_ProviderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_identity_provider(inputs)
});
/**
* | output |
* | --- |
* | "Initial state" |
*
* @param {Ui_Diagram_Kind_Initial_StateInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_initial_state = /** @type {((inputs?: Ui_Diagram_Kind_Initial_StateInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Initial_StateInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_initial_state(inputs)
});
/**
* | output |
* | --- |
* | "Interface" |
*
* @param {Ui_Diagram_Kind_InterfaceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_interface = /** @type {((inputs?: Ui_Diagram_Kind_InterfaceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_InterfaceInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_interface(inputs)
});
/**
* | output |
* | --- |
* | "Internet" |
*
* @param {Ui_Diagram_Kind_InternetInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_internet = /** @type {((inputs?: Ui_Diagram_Kind_InternetInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_InternetInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_internet(inputs)
});
/**
* | output |
* | --- |
* | "Load balancer" |
*
* @param {Ui_Diagram_Kind_Load_BalancerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_load_balancer = /** @type {((inputs?: Ui_Diagram_Kind_Load_BalancerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Load_BalancerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_load_balancer(inputs)
});
/**
* | output |
* | --- |
* | "Mobile app" |
*
* @param {Ui_Diagram_Kind_Mobile_AppInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_mobile_app = /** @type {((inputs?: Ui_Diagram_Kind_Mobile_AppInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Mobile_AppInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_mobile_app(inputs)
});
/**
* | output |
* | --- |
* | "Object" |
*
* @param {Ui_Diagram_Kind_ObjectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_object = /** @type {((inputs?: Ui_Diagram_Kind_ObjectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ObjectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_object(inputs)
});
/**
* | output |
* | --- |
* | "Object storage" |
*
* @param {Ui_Diagram_Kind_Object_StorageInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_object_storage = /** @type {((inputs?: Ui_Diagram_Kind_Object_StorageInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Object_StorageInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_object_storage(inputs)
});
/**
* | output |
* | --- |
* | "Package" |
*
* @param {Ui_Diagram_Kind_PackageInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_package = /** @type {((inputs?: Ui_Diagram_Kind_PackageInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_PackageInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_package(inputs)
});
/**
* | output |
* | --- |
* | "People" |
*
* @param {Ui_Diagram_Kind_PeopleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_people = /** @type {((inputs?: Ui_Diagram_Kind_PeopleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_PeopleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_people(inputs)
});
/**
* | output |
* | --- |
* | "Person" |
*
* @param {Ui_Diagram_Kind_PersonInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_person = /** @type {((inputs?: Ui_Diagram_Kind_PersonInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_PersonInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_person(inputs)
});
/**
* | output |
* | --- |
* | "Every preset diagram kind" |
*
* @param {Ui_Diagram_Kind_Preview_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_preview_label = /** @type {((inputs?: Ui_Diagram_Kind_Preview_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Preview_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_preview_label(inputs)
});
/**
* | output |
* | --- |
* | "Queue" |
*
* @param {Ui_Diagram_Kind_QueueInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_queue = /** @type {((inputs?: Ui_Diagram_Kind_QueueInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_QueueInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_queue(inputs)
});
/**
* | output |
* | --- |
* | "Router" |
*
* @param {Ui_Diagram_Kind_RouterInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_router = /** @type {((inputs?: Ui_Diagram_Kind_RouterInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_RouterInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_router(inputs)
});
/**
* | output |
* | --- |
* | "Scheduled job" |
*
* @param {Ui_Diagram_Kind_Scheduled_JobInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_scheduled_job = /** @type {((inputs?: Ui_Diagram_Kind_Scheduled_JobInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Scheduled_JobInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_scheduled_job(inputs)
});
/**
* | output |
* | --- |
* | "Service" |
*
* @param {Ui_Diagram_Kind_ServiceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_service = /** @type {((inputs?: Ui_Diagram_Kind_ServiceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_ServiceInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_service(inputs)
});
/**
* | output |
* | --- |
* | "State" |
*
* @param {Ui_Diagram_Kind_StateInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_state = /** @type {((inputs?: Ui_Diagram_Kind_StateInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_StateInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_state(inputs)
});
/**
* | output |
* | --- |
* | "Topic or stream" |
*
* @param {Ui_Diagram_Kind_StreamInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_stream = /** @type {((inputs?: Ui_Diagram_Kind_StreamInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_StreamInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_stream(inputs)
});
/**
* | output |
* | --- |
* | "Software system" |
*
* @param {Ui_Diagram_Kind_SystemInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_system = /** @type {((inputs?: Ui_Diagram_Kind_SystemInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_SystemInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_system(inputs)
});
/**
* | output |
* | --- |
* | "Use case" |
*
* @param {Ui_Diagram_Kind_Use_CaseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_use_case = /** @type {((inputs?: Ui_Diagram_Kind_Use_CaseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Use_CaseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_use_case(inputs)
});
/**
* | output |
* | --- |
* | "Web app" |
*
* @param {Ui_Diagram_Kind_Web_AppInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_web_app = /** @type {((inputs?: Ui_Diagram_Kind_Web_AppInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_Web_AppInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_web_app(inputs)
});
/**
* | output |
* | --- |
* | "Worker" |
*
* @param {Ui_Diagram_Kind_WorkerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_kind_worker = /** @type {((inputs?: Ui_Diagram_Kind_WorkerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Kind_WorkerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_kind_worker(inputs)
});
/**
* | output |
* | --- |
* | "Elements" |
*
* @param {Ui_Diagram_Legend_ElementsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_elements = /** @type {((inputs?: Ui_Diagram_Legend_ElementsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_ElementsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_elements(inputs)
});
/**
* | output |
* | --- |
* | "arrow" |
*
* @param {Ui_Diagram_Legend_End_ArrowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_arrow = /** @type {((inputs?: Ui_Diagram_Legend_End_ArrowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_ArrowInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_arrow(inputs)
});
/**
* | output |
* | --- |
* | "{line}, {end} at the end" |
*
* @param {Ui_Diagram_Legend_End_At_EndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_at_end = /** @type {((inputs: Ui_Diagram_Legend_End_At_EndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_At_EndInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_at_end(inputs)
});
/**
* | output |
* | --- |
* | "{line}, {end} at the start" |
*
* @param {Ui_Diagram_Legend_End_At_StartInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_at_start = /** @type {((inputs: Ui_Diagram_Legend_End_At_StartInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_At_StartInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_at_start(inputs)
});
/**
* | output |
* | --- |
* | "filled diamond" |
*
* @param {Ui_Diagram_Legend_End_DiamondInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_diamond = /** @type {((inputs?: Ui_Diagram_Legend_End_DiamondInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_DiamondInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_diamond(inputs)
});
/**
* | output |
* | --- |
* | "hollow diamond" |
*
* @param {Ui_Diagram_Legend_End_Diamond_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_diamond_open = /** @type {((inputs?: Ui_Diagram_Legend_End_Diamond_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_Diamond_OpenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_diamond_open(inputs)
});
/**
* | output |
* | --- |
* | "dot" |
*
* @param {Ui_Diagram_Legend_End_DotInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_dot = /** @type {((inputs?: Ui_Diagram_Legend_End_DotInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_DotInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_dot(inputs)
});
/**
* | output |
* | --- |
* | "open arrow" |
*
* @param {Ui_Diagram_Legend_End_OpenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_open = /** @type {((inputs?: Ui_Diagram_Legend_End_OpenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_OpenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_open(inputs)
});
/**
* | output |
* | --- |
* | "hollow triangle" |
*
* @param {Ui_Diagram_Legend_End_TriangleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_end_triangle = /** @type {((inputs?: Ui_Diagram_Legend_End_TriangleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_End_TriangleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_end_triangle(inputs)
});
/**
* | output |
* | --- |
* | "{line}, {start} at the start and {end} at the end" |
*
* @param {Ui_Diagram_Legend_Ends_BothInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_ends_both = /** @type {((inputs: Ui_Diagram_Legend_Ends_BothInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_Ends_BothInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_ends_both(inputs)
});
/**
* | output |
* | --- |
* | "Dashed line" |
*
* @param {Ui_Diagram_Legend_Line_DashedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_line_dashed = /** @type {((inputs?: Ui_Diagram_Legend_Line_DashedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_Line_DashedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_line_dashed(inputs)
});
/**
* | output |
* | --- |
* | "Dotted line" |
*
* @param {Ui_Diagram_Legend_Line_DottedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_line_dotted = /** @type {((inputs?: Ui_Diagram_Legend_Line_DottedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_Line_DottedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_line_dotted(inputs)
});
/**
* | output |
* | --- |
* | "Solid line" |
*
* @param {Ui_Diagram_Legend_Line_SolidInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_line_solid = /** @type {((inputs?: Ui_Diagram_Legend_Line_SolidInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_Line_SolidInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_line_solid(inputs)
});
/**
* | output |
* | --- |
* | "Relationships" |
*
* @param {Ui_Diagram_Legend_RelationshipsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_relationships = /** @type {((inputs?: Ui_Diagram_Legend_RelationshipsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_RelationshipsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_relationships(inputs)
});
/**
* | output |
* | --- |
* | "Key" |
*
* @param {Ui_Diagram_Legend_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_title = /** @type {((inputs?: Ui_Diagram_Legend_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_title(inputs)
});
/**
* | output |
* | --- |
* | "{line}, both ways" |
*
* @param {Ui_Diagram_Legend_Two_WayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_legend_two_way = /** @type {((inputs: Ui_Diagram_Legend_Two_WayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Legend_Two_WayInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_legend_two_way(inputs)
});
/**
* | output |
* | --- |
* | "external" |
*
* @param {Ui_Diagram_Node_ExternalInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_node_external = /** @type {((inputs?: Ui_Diagram_Node_ExternalInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Node_ExternalInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_node_external(inputs)
});
/**
* | output |
* | --- |
* | "selected" |
*
* @param {Ui_Diagram_Node_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_node_selected = /** @type {((inputs?: Ui_Diagram_Node_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Node_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_node_selected(inputs)
});
/**
* | output |
* | --- |
* | "«{stereotype}»" |
*
* @param {Ui_Diagram_Node_StereotypeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_node_stereotype = /** @type {((inputs: Ui_Diagram_Node_StereotypeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Node_StereotypeInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_node_stereotype(inputs)
});
/**
* | output |
* | --- |
* | "[{technology}]" |
*
* @param {Ui_Diagram_Node_TechnologyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_node_technology = /** @type {((inputs: Ui_Diagram_Node_TechnologyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Node_TechnologyInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_node_technology(inputs)
});
/**
* | output |
* | --- |
* | "Note" |
*
* @param {Ui_Diagram_Note_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_note_label = /** @type {((inputs?: Ui_Diagram_Note_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Note_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_note_label(inputs)
});
/**
* | output |
* | --- |
* | "Note, selected" |
*
* @param {Ui_Diagram_Note_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diagram_note_selected = /** @type {((inputs?: Ui_Diagram_Note_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diagram_Note_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diagram_note_selected(inputs)
});
/**
* | output |
* | --- |
* | "Close" |
*
* @param {Ui_Dialog_CloseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_dialog_close = /** @type {((inputs?: Ui_Dialog_CloseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Dialog_CloseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_dialog_close(inputs)
});
/**
* | output |
* | --- |
* | "added" |
*
* @param {Ui_Diff_AddedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diff_added = /** @type {((inputs?: Ui_Diff_AddedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diff_AddedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diff_added(inputs)
});
/**
* | output |
* | --- |
* | "changed" |
*
* @param {Ui_Diff_ChangedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diff_changed = /** @type {((inputs?: Ui_Diff_ChangedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diff_ChangedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diff_changed(inputs)
});
/**
* | output |
* | --- |
* | "No differences." |
*
* @param {Ui_Diff_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diff_empty = /** @type {((inputs?: Ui_Diff_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diff_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diff_empty(inputs)
});
/**
* | output |
* | --- |
* | "({kind})" |
*
* @param {Ui_Diff_KindInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diff_kind = /** @type {((inputs: Ui_Diff_KindInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diff_KindInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diff_kind(inputs)
});
/**
* | output |
* | --- |
* | "removed" |
*
* @param {Ui_Diff_RemovedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_diff_removed = /** @type {((inputs?: Ui_Diff_RemovedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Diff_RemovedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_diff_removed(inputs)
});
/**
* | output |
* | --- |
* | "Menu" |
*
* @param {Ui_Drawer_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_drawer_label = /** @type {((inputs?: Ui_Drawer_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Drawer_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_drawer_label(inputs)
});
/**
* | output |
* | --- |
* | "{days} d" |
*
* @param {Ui_Duration_DaysInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_days = /** @type {((inputs: Ui_Duration_DaysInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_DaysInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_days(inputs)
});
/**
* | output |
* | --- |
* | "{days} d {hours} h" |
*
* @param {Ui_Duration_Days_HoursInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_days_hours = /** @type {((inputs: Ui_Duration_Days_HoursInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Days_HoursInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_days_hours(inputs)
});
/**
* | output |
* | --- |
* | "{hours} h" |
*
* @param {Ui_Duration_HoursInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_hours = /** @type {((inputs: Ui_Duration_HoursInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_HoursInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_hours(inputs)
});
/**
* | output |
* | --- |
* | "{hours} h {minutes} min" |
*
* @param {Ui_Duration_Hours_MinutesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_hours_minutes = /** @type {((inputs: Ui_Duration_Hours_MinutesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Hours_MinutesInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_hours_minutes(inputs)
});
/**
* | output |
* | --- |
* | "{minutes} min" |
*
* @param {Ui_Duration_MinutesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_minutes = /** @type {((inputs: Ui_Duration_MinutesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_MinutesInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_minutes(inputs)
});
/**
* | output |
* | --- |
* | "Custom" |
*
* @param {Ui_Duration_Picker_CustomInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_custom = /** @type {((inputs?: Ui_Duration_Picker_CustomInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_CustomInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_custom(inputs)
});
/**
* | output |
* | --- |
* | "Hours" |
*
* @param {Ui_Duration_Picker_HoursInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_hours = /** @type {((inputs?: Ui_Duration_Picker_HoursInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_HoursInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_hours(inputs)
});
/**
* | output |
* | --- |
* | "hours" |
*
* @param {Ui_Duration_Picker_Hours_SuffixInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_hours_suffix = /** @type {((inputs?: Ui_Duration_Picker_Hours_SuffixInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_Hours_SuffixInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_hours_suffix(inputs)
});
/**
* | output |
* | --- |
* | "For how long" |
*
* @param {Ui_Duration_Picker_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_label = /** @type {((inputs?: Ui_Duration_Picker_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_label(inputs)
});
/**
* | output |
* | --- |
* | "{weekday} {day} {month}, {time}" |
*
* @param {Ui_Duration_Picker_On_DayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_on_day = /** @type {((inputs: Ui_Duration_Picker_On_DayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_On_DayInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_on_day(inputs)
});
/**
* | output |
* | --- |
* | "Longer than the policy allows ({max})" |
*
* @param {Ui_Duration_Picker_Over_PolicyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_over_policy = /** @type {((inputs: Ui_Duration_Picker_Over_PolicyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_Over_PolicyInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_over_policy(inputs)
});
/**
* | output |
* | --- |
* | "The policy allows up to {max}." |
*
* @param {Ui_Duration_Picker_Policy_MaxInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_policy_max = /** @type {((inputs: Ui_Duration_Picker_Policy_MaxInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_Policy_MaxInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_policy_max(inputs)
});
/**
* | output |
* | --- |
* | "Today, {time}" |
*
* @param {Ui_Duration_Picker_TodayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_today = /** @type {((inputs: Ui_Duration_Picker_TodayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_TodayInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_today(inputs)
});
/**
* | output |
* | --- |
* | "Until" |
*
* @param {Ui_Duration_Picker_UntilInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_picker_until = /** @type {((inputs?: Ui_Duration_Picker_UntilInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Picker_UntilInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_picker_until(inputs)
});
/**
* | output |
* | --- |
* | "less than a minute" |
*
* @param {Ui_Duration_Under_MinuteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_duration_under_minute = /** @type {((inputs?: Ui_Duration_Under_MinuteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Duration_Under_MinuteInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_duration_under_minute(inputs)
});
/**
* | output |
* | --- |
* | "Request ID" |
*
* @param {Ui_Error_State_Request_IdInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_error_state_request_id = /** @type {((inputs?: Ui_Error_State_Request_IdInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Error_State_Request_IdInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_error_state_request_id(inputs)
});
/**
* | output |
* | --- |
* | "Not supported" |
*
* @param {Ui_Feature_List_NoInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feature_list_no = /** @type {((inputs?: Ui_Feature_List_NoInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feature_List_NoInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feature_list_no(inputs)
});
/**
* | output |
* | --- |
* | "Supported" |
*
* @param {Ui_Feature_List_YesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feature_list_yes = /** @type {((inputs?: Ui_Feature_List_YesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feature_List_YesInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feature_list_yes(inputs)
});
/**
* | output |
* | --- |
* | "Unread" |
*
* @param {Ui_Feed_Item_UnreadInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_item_unread = /** @type {((inputs?: Ui_Feed_Item_UnreadInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Item_UnreadInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_item_unread(inputs)
});
/**
* | output |
* | --- |
* | "All" |
*
* @param {Ui_Feed_Panel_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_all = /** @type {((inputs?: Ui_Feed_Panel_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_AllInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_all(inputs)
});
/**
* | output |
* | --- |
* | "You’re up to date." |
*
* @param {Ui_Feed_Panel_Empty_TextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_empty_text = /** @type {((inputs?: Ui_Feed_Panel_Empty_TextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_Empty_TextInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_empty_text(inputs)
});
/**
* | output |
* | --- |
* | "Nothing here" |
*
* @param {Ui_Feed_Panel_Empty_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_empty_title = /** @type {((inputs?: Ui_Feed_Panel_Empty_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_Empty_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_empty_title(inputs)
});
/**
* | output |
* | --- |
* | "Filter entries" |
*
* @param {Ui_Feed_Panel_FilterInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_filter = /** @type {((inputs?: Ui_Feed_Panel_FilterInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_FilterInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_filter(inputs)
});
/**
* | output |
* | --- |
* | "Mark all read" |
*
* @param {Ui_Feed_Panel_Mark_All_ReadInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_mark_all_read = /** @type {((inputs?: Ui_Feed_Panel_Mark_All_ReadInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_Mark_All_ReadInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_mark_all_read(inputs)
});
/**
* | output |
* | --- |
* | "Unread" |
*
* @param {Ui_Feed_Panel_UnreadInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_feed_panel_unread = /** @type {((inputs?: Ui_Feed_Panel_UnreadInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Feed_Panel_UnreadInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_feed_panel_unread(inputs)
});
/**
* | output |
* | --- |
* | "Add option" |
*
* @param {Ui_Field_Inspector_Add_OptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_add_option = /** @type {((inputs?: Ui_Field_Inspector_Add_OptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Add_OptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_add_option(inputs)
});
/**
* | output |
* | --- |
* | "Checked" |
*
* @param {Ui_Field_Inspector_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_checked = /** @type {((inputs?: Ui_Field_Inspector_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_checked(inputs)
});
/**
* | output |
* | --- |
* | "Only show when…" |
*
* @param {Ui_Field_Inspector_ConditionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition = /** @type {((inputs?: Ui_Field_Inspector_ConditionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_ConditionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition(inputs)
});
/**
* | output |
* | --- |
* | "Field" |
*
* @param {Ui_Field_Inspector_Condition_FieldInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition_field = /** @type {((inputs?: Ui_Field_Inspector_Condition_FieldInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Condition_FieldInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition_field(inputs)
});
/**
* | output |
* | --- |
* | "Hide this unless an earlier answer matches." |
*
* @param {Ui_Field_Inspector_Condition_HintInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition_hint = /** @type {((inputs?: Ui_Field_Inspector_Condition_HintInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Condition_HintInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition_hint(inputs)
});
/**
* | output |
* | --- |
* | "Add a dropdown, checkbox or number above this field first." |
*
* @param {Ui_Field_Inspector_Condition_NoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition_none = /** @type {((inputs?: Ui_Field_Inspector_Condition_NoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Condition_NoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition_none(inputs)
});
/**
* | output |
* | --- |
* | "Condition" |
*
* @param {Ui_Field_Inspector_Condition_OpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition_op = /** @type {((inputs?: Ui_Field_Inspector_Condition_OpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Condition_OpInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition_op(inputs)
});
/**
* | output |
* | --- |
* | "Value" |
*
* @param {Ui_Field_Inspector_Condition_ValueInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_condition_value = /** @type {((inputs?: Ui_Field_Inspector_Condition_ValueInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Condition_ValueInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_condition_value(inputs)
});
/**
* | output |
* | --- |
* | "Delete field" |
*
* @param {Ui_Field_Inspector_DeleteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_delete = /** @type {((inputs?: Ui_Field_Inspector_DeleteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_DeleteInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_delete(inputs)
});
/**
* | output |
* | --- |
* | "Select a field to edit it, or add one." |
*
* @param {Ui_Field_Inspector_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_empty = /** @type {((inputs?: Ui_Field_Inspector_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_empty(inputs)
});
/**
* | output |
* | --- |
* | "Heading" |
*
* @param {Ui_Field_Inspector_HeadingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_heading = /** @type {((inputs?: Ui_Field_Inspector_HeadingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_HeadingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_heading(inputs)
});
/**
* | output |
* | --- |
* | "Help text" |
*
* @param {Ui_Field_Inspector_HelpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_help = /** @type {((inputs?: Ui_Field_Inspector_HelpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_HelpInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_help(inputs)
});
/**
* | output |
* | --- |
* | "What should people know before answering?" |
*
* @param {Ui_Field_Inspector_Help_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_help_placeholder = /** @type {((inputs?: Ui_Field_Inspector_Help_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Help_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_help_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "The key rules and the API use" |
*
* @param {Ui_Field_Inspector_Key_HintInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_key_hint = /** @type {((inputs?: Ui_Field_Inspector_Key_HintInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Key_HintInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_key_hint(inputs)
});
/**
* | output |
* | --- |
* | "Max" |
*
* @param {Ui_Field_Inspector_MaxInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_max = /** @type {((inputs?: Ui_Field_Inspector_MaxInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_MaxInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_max(inputs)
});
/**
* | output |
* | --- |
* | "Min" |
*
* @param {Ui_Field_Inspector_MinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_min = /** @type {((inputs?: Ui_Field_Inspector_MinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_MinInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_min(inputs)
});
/**
* | output |
* | --- |
* | "Option {number}" |
*
* @param {Ui_Field_Inspector_New_OptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_new_option = /** @type {((inputs: Ui_Field_Inspector_New_OptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_New_OptionInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_new_option(inputs)
});
/**
* | output |
* | --- |
* | "Not checked" |
*
* @param {Ui_Field_Inspector_Not_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_not_checked = /** @type {((inputs?: Ui_Field_Inspector_Not_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Not_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_not_checked(inputs)
});
/**
* | output |
* | --- |
* | "Option {number}" |
*
* @param {Ui_Field_Inspector_OptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_option = /** @type {((inputs: Ui_Field_Inspector_OptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_OptionInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_option(inputs)
});
/**
* | output |
* | --- |
* | "Options" |
*
* @param {Ui_Field_Inspector_OptionsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_options = /** @type {((inputs?: Ui_Field_Inspector_OptionsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_OptionsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_options(inputs)
});
/**
* | output |
* | --- |
* | "Placeholder" |
*
* @param {Ui_Field_Inspector_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_placeholder = /** @type {((inputs?: Ui_Field_Inspector_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Question" |
*
* @param {Ui_Field_Inspector_QuestionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_question = /** @type {((inputs?: Ui_Field_Inspector_QuestionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_QuestionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_question(inputs)
});
/**
* | output |
* | --- |
* | "Remove option {label}" |
*
* @param {Ui_Field_Inspector_Remove_OptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_remove_option = /** @type {((inputs: Ui_Field_Inspector_Remove_OptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Remove_OptionInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_remove_option(inputs)
});
/**
* | output |
* | --- |
* | "Required" |
*
* @param {Ui_Field_Inspector_RequiredInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_required = /** @type {((inputs?: Ui_Field_Inspector_RequiredInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_RequiredInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_required(inputs)
});
/**
* | output |
* | --- |
* | "People can’t submit without it." |
*
* @param {Ui_Field_Inspector_Required_HintInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_required_hint = /** @type {((inputs?: Ui_Field_Inspector_Required_HintInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_Required_HintInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_required_hint(inputs)
});
/**
* | output |
* | --- |
* | "Look up in" |
*
* @param {Ui_Field_Inspector_SourceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_inspector_source = /** @type {((inputs?: Ui_Field_Inspector_SourceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Inspector_SourceInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_inspector_source(inputs)
});
/**
* | output |
* | --- |
* | "field: add" |
*
* @param {Ui_Field_Palette_AddInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_palette_add = /** @type {((inputs?: Ui_Field_Palette_AddInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Palette_AddInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_palette_add(inputs)
});
/**
* | output |
* | --- |
* | "Add a field" |
*
* @param {Ui_Field_Palette_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_field_palette_label = /** @type {((inputs?: Ui_Field_Palette_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Field_Palette_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_field_palette_label(inputs)
});
/**
* | output |
* | --- |
* | "Cancel upload of {name}" |
*
* @param {Ui_File_Upload_CancelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_cancel = /** @type {((inputs: Ui_File_Upload_CancelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_CancelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_cancel(inputs)
});
/**
* | output |
* | --- |
* | "Choose file" |
*
* @param {Ui_File_Upload_ChooseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_choose = /** @type {((inputs?: Ui_File_Upload_ChooseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_ChooseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_choose(inputs)
});
/**
* | output |
* | --- |
* | "Drag files here, or" |
*
* @param {Ui_File_Upload_Drag_ManyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_drag_many = /** @type {((inputs?: Ui_File_Upload_Drag_ManyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_Drag_ManyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_drag_many(inputs)
});
/**
* | output |
* | --- |
* | "Drag a file here, or" |
*
* @param {Ui_File_Upload_Drag_OneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_drag_one = /** @type {((inputs?: Ui_File_Upload_Drag_OneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_Drag_OneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_drag_one(inputs)
});
/**
* | output |
* | --- |
* | "Drop to upload" |
*
* @param {Ui_File_Upload_DropInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_drop = /** @type {((inputs?: Ui_File_Upload_DropInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_DropInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_drop(inputs)
});
/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Ui_File_Upload_RemoveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_remove = /** @type {((inputs: Ui_File_Upload_RemoveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_RemoveInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_remove(inputs)
});
/**
* | output |
* | --- |
* | "Larger than {size}" |
*
* @param {Ui_File_Upload_Too_LargeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_too_large = /** @type {((inputs: Ui_File_Upload_Too_LargeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_Too_LargeInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_too_large(inputs)
});
/**
* | output |
* | --- |
* | "Not a supported file type" |
*
* @param {Ui_File_Upload_UnsupportedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_unsupported = /** @type {((inputs?: Ui_File_Upload_UnsupportedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_UnsupportedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_unsupported(inputs)
});
/**
* | output |
* | --- |
* | "up to {size}" |
*
* @param {Ui_File_Upload_Up_ToInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_up_to = /** @type {((inputs: Ui_File_Upload_Up_ToInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_Up_ToInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_up_to(inputs)
});
/**
* | output |
* | --- |
* | "Uploading {name}" |
*
* @param {Ui_File_Upload_UploadingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_file_upload_uploading = /** @type {((inputs: Ui_File_Upload_UploadingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_File_Upload_UploadingInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_file_upload_uploading(inputs)
});
/**
* | output |
* | --- |
* | "{label}: {first} +{more}" |
*
* @param {Ui_Filter_Bar_Chip_MoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_chip_more = /** @type {((inputs: Ui_Filter_Bar_Chip_MoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_Chip_MoreInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_chip_more(inputs)
});
/**
* | output |
* | --- |
* | "{label}: {first}" |
*
* @param {Ui_Filter_Bar_Chip_OneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_chip_one = /** @type {((inputs: Ui_Filter_Bar_Chip_OneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_Chip_OneInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_chip_one(inputs)
});
/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Ui_Filter_Bar_ClearInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_clear = /** @type {((inputs?: Ui_Filter_Bar_ClearInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_ClearInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_clear(inputs)
});
/**
* | output |
* | --- |
* | "Clear all" |
*
* @param {Ui_Filter_Bar_Clear_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_clear_all = /** @type {((inputs?: Ui_Filter_Bar_Clear_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_Clear_AllInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_clear_all(inputs)
});
/**
* | output |
* | --- |
* | "Done" |
*
* @param {Ui_Filter_Bar_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_done = /** @type {((inputs?: Ui_Filter_Bar_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_done(inputs)
});
/**
* | output |
* | --- |
* | "Filter by {name}" |
*
* @param {Ui_Filter_Bar_Filter_ByInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_filter_by = /** @type {((inputs: Ui_Filter_Bar_Filter_ByInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_Filter_ByInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_filter_by(inputs)
});
/**
* | output |
* | --- |
* | "Filters" |
*
* @param {Ui_Filter_Bar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_label = /** @type {((inputs?: Ui_Filter_Bar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_label(inputs)
});
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Ui_Filter_Bar_SearchInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_filter_bar_search = /** @type {((inputs?: Ui_Filter_Bar_SearchInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Filter_Bar_SearchInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_filter_bar_search(inputs)
});
/**
* | output |
* | --- |
* | "Flow canvas" |
*
* @param {Ui_Flow_Canvas_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_canvas_label = /** @type {((inputs?: Ui_Flow_Canvas_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Canvas_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_canvas_label(inputs)
});
/**
* | output |
* | --- |
* | "canvas" |
*
* @param {Ui_Flow_Canvas_RoledescriptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_canvas_roledescription = /** @type {((inputs?: Ui_Flow_Canvas_RoledescriptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Canvas_RoledescriptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_canvas_roledescription(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} comment" |
* | "other" | "{count} comments" |
*
* @param {Ui_Flow_Node_CommentsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_comments = /** @type {((inputs: Ui_Flow_Node_CommentsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_CommentsInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_comments(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} comment on {title}" |
* | "other" | "{count} comments on {title}" |
*
* @param {Ui_Flow_Node_Comments_OnInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_comments_on = /** @type {((inputs: Ui_Flow_Node_Comments_OnInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Comments_OnInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_comments_on(inputs)
});
/**
* | output |
* | --- |
* | "added" |
*
* @param {Ui_Flow_Node_Diff_AddedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_added = /** @type {((inputs?: Ui_Flow_Node_Diff_AddedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_AddedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_added(inputs)
});
/**
* | output |
* | --- |
* | "+ Added" |
*
* @param {Ui_Flow_Node_Diff_Badge_AddedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_badge_added = /** @type {((inputs?: Ui_Flow_Node_Diff_Badge_AddedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_Badge_AddedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_badge_added(inputs)
});
/**
* | output |
* | --- |
* | "~ Changed" |
*
* @param {Ui_Flow_Node_Diff_Badge_ChangedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_badge_changed = /** @type {((inputs?: Ui_Flow_Node_Diff_Badge_ChangedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_Badge_ChangedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_badge_changed(inputs)
});
/**
* | output |
* | --- |
* | "− Removed" |
*
* @param {Ui_Flow_Node_Diff_Badge_RemovedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_badge_removed = /** @type {((inputs?: Ui_Flow_Node_Diff_Badge_RemovedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_Badge_RemovedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_badge_removed(inputs)
});
/**
* | output |
* | --- |
* | "changed" |
*
* @param {Ui_Flow_Node_Diff_ChangedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_changed = /** @type {((inputs?: Ui_Flow_Node_Diff_ChangedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_ChangedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_changed(inputs)
});
/**
* | output |
* | --- |
* | "removed" |
*
* @param {Ui_Flow_Node_Diff_RemovedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_diff_removed = /** @type {((inputs?: Ui_Flow_Node_Diff_RemovedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Diff_RemovedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_diff_removed(inputs)
});
/**
* | output |
* | --- |
* | "{kind} · {source}" |
*
* @param {Ui_Flow_Node_Kind_SourceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_kind_source = /** @type {((inputs: Ui_Flow_Node_Kind_SourceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_Kind_SourceInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_kind_source(inputs)
});
/**
* | output |
* | --- |
* | "{kind}: {title}" |
*
* @param {Ui_Flow_Node_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_label = /** @type {((inputs: Ui_Flow_Node_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_label(inputs)
});
/**
* | output |
* | --- |
* | "selected" |
*
* @param {Ui_Flow_Node_SelectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_selected = /** @type {((inputs?: Ui_Flow_Node_SelectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_SelectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_selected(inputs)
});
/**
* | output |
* | --- |
* | "failed" |
*
* @param {Ui_Flow_Node_State_FailedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_state_failed = /** @type {((inputs?: Ui_Flow_Node_State_FailedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_State_FailedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_state_failed(inputs)
});
/**
* | output |
* | --- |
* | "running" |
*
* @param {Ui_Flow_Node_State_RunningInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_state_running = /** @type {((inputs?: Ui_Flow_Node_State_RunningInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_State_RunningInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_state_running(inputs)
});
/**
* | output |
* | --- |
* | "skipped" |
*
* @param {Ui_Flow_Node_State_SkippedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_state_skipped = /** @type {((inputs?: Ui_Flow_Node_State_SkippedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_State_SkippedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_state_skipped(inputs)
});
/**
* | output |
* | --- |
* | "succeeded" |
*
* @param {Ui_Flow_Node_State_SucceededInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_state_succeeded = /** @type {((inputs?: Ui_Flow_Node_State_SucceededInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_State_SucceededInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_state_succeeded(inputs)
});
/**
* | output |
* | --- |
* | "waiting" |
*
* @param {Ui_Flow_Node_State_WaitingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_flow_node_state_waiting = /** @type {((inputs?: Ui_Flow_Node_State_WaitingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Flow_Node_State_WaitingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_flow_node_state_waiting(inputs)
});
/**
* | output |
* | --- |
* | "Advanced" |
*
* @param {Ui_Form_Builder_Group_AdvancedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_group_advanced = /** @type {((inputs?: Ui_Form_Builder_Group_AdvancedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Group_AdvancedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_group_advanced(inputs)
});
/**
* | output |
* | --- |
* | "Basic" |
*
* @param {Ui_Form_Builder_Group_BasicInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_group_basic = /** @type {((inputs?: Ui_Form_Builder_Group_BasicInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Group_BasicInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_group_basic(inputs)
});
/**
* | output |
* | --- |
* | "Choices" |
*
* @param {Ui_Form_Builder_Group_ChoicesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_group_choices = /** @type {((inputs?: Ui_Form_Builder_Group_ChoicesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Group_ChoicesInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_group_choices(inputs)
});
/**
* | output |
* | --- |
* | "Checkbox" |
*
* @param {Ui_Form_Builder_Type_CheckboxInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_checkbox = /** @type {((inputs?: Ui_Form_Builder_Type_CheckboxInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_CheckboxInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_checkbox(inputs)
});
/**
* | output |
* | --- |
* | "Date" |
*
* @param {Ui_Form_Builder_Type_DateInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_date = /** @type {((inputs?: Ui_Form_Builder_Type_DateInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_DateInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_date(inputs)
});
/**
* | output |
* | --- |
* | "File upload" |
*
* @param {Ui_Form_Builder_Type_FileInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_file = /** @type {((inputs?: Ui_Form_Builder_Type_FileInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_FileInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_file(inputs)
});
/**
* | output |
* | --- |
* | "Record lookup" |
*
* @param {Ui_Form_Builder_Type_LookupInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_lookup = /** @type {((inputs?: Ui_Form_Builder_Type_LookupInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_LookupInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_lookup(inputs)
});
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Ui_Form_Builder_Type_MoneyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_money = /** @type {((inputs?: Ui_Form_Builder_Type_MoneyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_MoneyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_money(inputs)
});
/**
* | output |
* | --- |
* | "Multiple choice" |
*
* @param {Ui_Form_Builder_Type_MultiselectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_multiselect = /** @type {((inputs?: Ui_Form_Builder_Type_MultiselectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_MultiselectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_multiselect(inputs)
});
/**
* | output |
* | --- |
* | "Number" |
*
* @param {Ui_Form_Builder_Type_NumberInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_number = /** @type {((inputs?: Ui_Form_Builder_Type_NumberInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_NumberInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_number(inputs)
});
/**
* | output |
* | --- |
* | "Person" |
*
* @param {Ui_Form_Builder_Type_PersonInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_person = /** @type {((inputs?: Ui_Form_Builder_Type_PersonInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_PersonInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_person(inputs)
});
/**
* | output |
* | --- |
* | "Section heading" |
*
* @param {Ui_Form_Builder_Type_SectionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_section = /** @type {((inputs?: Ui_Form_Builder_Type_SectionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_SectionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_section(inputs)
});
/**
* | output |
* | --- |
* | "Dropdown" |
*
* @param {Ui_Form_Builder_Type_SelectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_select = /** @type {((inputs?: Ui_Form_Builder_Type_SelectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_SelectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_select(inputs)
});
/**
* | output |
* | --- |
* | "Short text" |
*
* @param {Ui_Form_Builder_Type_TextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_text = /** @type {((inputs?: Ui_Form_Builder_Type_TextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_TextInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_text(inputs)
});
/**
* | output |
* | --- |
* | "Long text" |
*
* @param {Ui_Form_Builder_Type_TextareaInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_builder_type_textarea = /** @type {((inputs?: Ui_Form_Builder_Type_TextareaInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Builder_Type_TextareaInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_builder_type_textarea(inputs)
});
/**
* | output |
* | --- |
* | "Couldn't save" |
*
* @param {Ui_Form_Error_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_error_title = /** @type {((inputs?: Ui_Form_Error_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Error_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_error_title(inputs)
});
/**
* | output |
* | --- |
* | ", conditional" |
*
* @param {Ui_Form_Field_Card_Conditional_SuffixInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_conditional_suffix = /** @type {((inputs?: Ui_Form_Field_Card_Conditional_SuffixInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Conditional_SuffixInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_conditional_suffix(inputs)
});
/**
* | output |
* | --- |
* | "Delete field" |
*
* @param {Ui_Form_Field_Card_DeleteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_delete = /** @type {((inputs?: Ui_Form_Field_Card_DeleteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_DeleteInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_delete(inputs)
});
/**
* | output |
* | --- |
* | "Drop files or browse" |
*
* @param {Ui_Form_Field_Card_DropInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_drop = /** @type {((inputs?: Ui_Form_Field_Card_DropInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_DropInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_drop(inputs)
});
/**
* | output |
* | --- |
* | "Duplicate" |
*
* @param {Ui_Form_Field_Card_DuplicateInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_duplicate = /** @type {((inputs?: Ui_Form_Field_Card_DuplicateInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_DuplicateInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_duplicate(inputs)
});
/**
* | output |
* | --- |
* | "If {condition}" |
*
* @param {Ui_Form_Field_Card_IfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_if = /** @type {((inputs: Ui_Form_Field_Card_IfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_IfInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_if(inputs)
});
/**
* | output |
* | --- |
* | "Move down" |
*
* @param {Ui_Form_Field_Card_Move_DownInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_move_down = /** @type {((inputs?: Ui_Form_Field_Card_Move_DownInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Move_DownInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_move_down(inputs)
});
/**
* | output |
* | --- |
* | "Move up" |
*
* @param {Ui_Form_Field_Card_Move_UpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_move_up = /** @type {((inputs?: Ui_Form_Field_Card_Move_UpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Move_UpInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_move_up(inputs)
});
/**
* | output |
* | --- |
* | "records" |
*
* @param {Ui_Form_Field_Card_RecordsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_records = /** @type {((inputs?: Ui_Form_Field_Card_RecordsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_RecordsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_records(inputs)
});
/**
* | output |
* | --- |
* | "Required" |
*
* @param {Ui_Form_Field_Card_RequiredInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_required = /** @type {((inputs?: Ui_Form_Field_Card_RequiredInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_RequiredInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_required(inputs)
});
/**
* | output |
* | --- |
* | ", required" |
*
* @param {Ui_Form_Field_Card_Required_SuffixInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_required_suffix = /** @type {((inputs?: Ui_Form_Field_Card_Required_SuffixInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Required_SuffixInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_required_suffix(inputs)
});
/**
* | output |
* | --- |
* | "Search {source}" |
*
* @param {Ui_Form_Field_Card_SearchInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_search = /** @type {((inputs: Ui_Form_Field_Card_SearchInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_SearchInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_search(inputs)
});
/**
* | output |
* | --- |
* | "Search people" |
*
* @param {Ui_Form_Field_Card_Search_PeopleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_search_people = /** @type {((inputs?: Ui_Form_Field_Card_Search_PeopleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Search_PeopleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_search_people(inputs)
});
/**
* | output |
* | --- |
* | "Shown only if {condition}" |
*
* @param {Ui_Form_Field_Card_Shown_IfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_field_card_shown_if = /** @type {((inputs: Ui_Form_Field_Card_Shown_IfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Field_Card_Shown_IfInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_field_card_shown_if(inputs)
});
/**
* | output |
* | --- |
* | "(optional)" |
*
* @param {Ui_Form_OptionalInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_optional = /** @type {((inputs?: Ui_Form_OptionalInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_OptionalInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_optional(inputs)
});
/**
* | output |
* | --- |
* | "Attach at least one file." |
*
* @param {Ui_Form_Renderer_AttachInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_attach = /** @type {((inputs?: Ui_Form_Renderer_AttachInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_AttachInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_attach(inputs)
});
/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Ui_Form_Renderer_ChooseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_choose = /** @type {((inputs?: Ui_Form_Renderer_ChooseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_ChooseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_choose(inputs)
});
/**
* | output |
* | --- |
* | "Please confirm this to continue." |
*
* @param {Ui_Form_Renderer_ConfirmInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_confirm = /** @type {((inputs?: Ui_Form_Renderer_ConfirmInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_ConfirmInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_confirm(inputs)
});
/**
* | output |
* | --- |
* | "Enter an email like name@company.example." |
*
* @param {Ui_Form_Renderer_EmailInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_email = /** @type {((inputs?: Ui_Form_Renderer_EmailInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_EmailInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_email(inputs)
});
/**
* | output |
* | --- |
* | "Enter at most {max}." |
*
* @param {Ui_Form_Renderer_MaxInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_max = /** @type {((inputs: Ui_Form_Renderer_MaxInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_MaxInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_max(inputs)
});
/**
* | output |
* | --- |
* | "Enter at least {min}." |
*
* @param {Ui_Form_Renderer_MinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_min = /** @type {((inputs: Ui_Form_Renderer_MinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_MinInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_min(inputs)
});
/**
* | output |
* | --- |
* | "Answer this question." |
*
* @param {Ui_Form_Renderer_RequiredInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_required = /** @type {((inputs?: Ui_Form_Renderer_RequiredInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_RequiredInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_required(inputs)
});
/**
* | output |
* | --- |
* | "Submit" |
*
* @param {Ui_Form_Renderer_SubmitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_submit = /** @type {((inputs?: Ui_Form_Renderer_SubmitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_SubmitInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_submit(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} answer needs attention" |
* | "other" | "{count} answers need attention" |
*
* @param {Ui_Form_Renderer_SummaryInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_form_renderer_summary = /** @type {((inputs: Ui_Form_Renderer_SummaryInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Form_Renderer_SummaryInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_form_renderer_summary(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{name}, {count} member" |
* | "other" | "{name}, {count} members" |
*
* @param {Ui_Group_Card_SelectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_group_card_select = /** @type {((inputs: Ui_Group_Card_SelectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Group_Card_SelectInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_group_card_select(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "Also turned off {list}, which needs it." |
* | "other" | "Also turned off {list}, which need it." |
*
* @param {Ui_Grouped_Toggle_List_Also_OffInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_grouped_toggle_list_also_off = /** @type {((inputs: Ui_Grouped_Toggle_List_Also_OffInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Grouped_Toggle_List_Also_OffInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_grouped_toggle_list_also_off(inputs)
});
/**
* | output |
* | --- |
* | "Also turned on {list}, which it needs." |
*
* @param {Ui_Grouped_Toggle_List_Also_OnInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_grouped_toggle_list_also_on = /** @type {((inputs: Ui_Grouped_Toggle_List_Also_OnInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Grouped_Toggle_List_Also_OnInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_grouped_toggle_list_also_on(inputs)
});
/**
* | output |
* | --- |
* | "{on} of {total}" |
*
* @param {Ui_Grouped_Toggle_List_CountInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_grouped_toggle_list_count = /** @type {((inputs: Ui_Grouped_Toggle_List_CountInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Grouped_Toggle_List_CountInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_grouped_toggle_list_count(inputs)
});
/**
* | output |
* | --- |
* | "No" |
*
* @param {Ui_Grouped_Toggle_List_OffInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_grouped_toggle_list_off = /** @type {((inputs?: Ui_Grouped_Toggle_List_OffInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Grouped_Toggle_List_OffInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_grouped_toggle_list_off(inputs)
});
/**
* | output |
* | --- |
* | "Nothing here." |
*
* @param {Ui_Inbox_List_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_inbox_list_empty = /** @type {((inputs?: Ui_Inbox_List_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Inbox_List_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_inbox_list_empty(inputs)
});
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Ui_Inbox_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_inbox_list_label = /** @type {((inputs?: Ui_Inbox_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Inbox_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_inbox_list_label(inputs)
});
/**
* | output |
* | --- |
* | "(new)" |
*
* @param {Ui_Inbox_List_NewInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_inbox_list_new = /** @type {((inputs?: Ui_Inbox_List_NewInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Inbox_List_NewInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_inbox_list_new(inputs)
});
/**
* | output |
* | --- |
* | "Close panel" |
*
* @param {Ui_Inspector_CloseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_inspector_close = /** @type {((inputs?: Ui_Inspector_CloseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Inspector_CloseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_inspector_close(inputs)
});
/**
* | output |
* | --- |
* | "Properties" |
*
* @param {Ui_Inspector_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_inspector_label = /** @type {((inputs?: Ui_Inspector_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Inspector_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_inspector_label(inputs)
});
/**
* | output |
* | --- |
* | "Move cancelled. “{title}” is back in {column}." |
*
* @param {Ui_Kanban_CancelledInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_cancelled = /** @type {((inputs: Ui_Kanban_CancelledInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_CancelledInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_cancelled(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{count} comment" |
* | "other" | "{count} comments" |
*
* @param {Ui_Kanban_Card_CommentsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_card_comments = /** @type {((inputs: Ui_Kanban_Card_CommentsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Card_CommentsInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_card_comments(inputs)
});
/**
* | output |
* | --- |
* | "flagged" |
*
* @param {Ui_Kanban_Card_FlaggedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_card_flagged = /** @type {((inputs?: Ui_Kanban_Card_FlaggedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Card_FlaggedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_card_flagged(inputs)
});
/**
* | output |
* | --- |
* | "{title}, moving" |
*
* @param {Ui_Kanban_Card_MovingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_card_moving = /** @type {((inputs: Ui_Kanban_Card_MovingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Card_MovingInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_card_moving(inputs)
});
/**
* | output |
* | --- |
* | "Draggable card" |
*
* @param {Ui_Kanban_Card_RoledescriptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_card_roledescription = /** @type {((inputs?: Ui_Kanban_Card_RoledescriptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Card_RoledescriptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_card_roledescription(inputs)
});
/**
* | output |
* | --- |
* | "Unassigned" |
*
* @param {Ui_Kanban_Card_UnownedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_card_unowned = /** @type {((inputs?: Ui_Kanban_Card_UnownedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Card_UnownedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_card_unowned(inputs)
});
/**
* | output |
* | --- |
* | "Add a card to {column}" |
*
* @param {Ui_Kanban_Column_AddInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_add = /** @type {((inputs: Ui_Kanban_Column_AddInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_AddInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_add(inputs)
});
/**
* | output |
* | --- |
* | "Drop here" |
*
* @param {Ui_Kanban_Column_DropInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_drop = /** @type {((inputs?: Ui_Kanban_Column_DropInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_DropInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_drop(inputs)
});
/**
* | output |
* | --- |
* | "No cards" |
*
* @param {Ui_Kanban_Column_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_empty = /** @type {((inputs?: Ui_Kanban_Column_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_empty(inputs)
});
/**
* | countPlural | output |
* | --- | --- |
* | "one" | "{title}, {count} card" |
* | "other" | "{title}, {count} cards" |
*
* @param {Ui_Kanban_Column_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_label = /** @type {((inputs: Ui_Kanban_Column_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_LabelInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_label(inputs)
});
/**
* | output |
* | --- |
* | "Work-in-progress limit {limit}" |
*
* @param {Ui_Kanban_Column_LimitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_limit = /** @type {((inputs: Ui_Kanban_Column_LimitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_LimitInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_limit(inputs)
});
/**
* | output |
* | --- |
* | "Over the limit of {limit}. Finish something first." |
*
* @param {Ui_Kanban_Column_OverInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_column_over = /** @type {((inputs: Ui_Kanban_Column_OverInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Column_OverInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_column_over(inputs)
});
/**
* | output |
* | --- |
* | "Dropped “{title}” where it was." |
*
* @param {Ui_Kanban_Dropped_In_PlaceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_dropped_in_place = /** @type {((inputs: Ui_Kanban_Dropped_In_PlaceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Dropped_In_PlaceInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_dropped_in_place(inputs)
});
/**
* | output |
* | --- |
* | "Press Enter to open. Press Space to pick up, arrow keys to move, Space to drop, Escape to cancel." |
*
* @param {Ui_Kanban_HelpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_help = /** @type {((inputs?: Ui_Kanban_HelpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_HelpInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_help(inputs)
});
/**
* | output |
* | --- |
* | "Board" |
*
* @param {Ui_Kanban_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_label = /** @type {((inputs?: Ui_Kanban_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_label(inputs)
});
/**
* | output |
* | --- |
* | "Moved to {column}, “{title}”, position {position} of {total}." |
*
* @param {Ui_Kanban_Moved_ToInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_moved_to = /** @type {((inputs: Ui_Kanban_Moved_ToInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Moved_ToInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_moved_to(inputs)
});
/**
* | output |
* | --- |
* | "Moved “{title}”, position {position} of {total}." |
*
* @param {Ui_Kanban_Moved_WithinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_moved_within = /** @type {((inputs: Ui_Kanban_Moved_WithinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Moved_WithinInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_moved_within(inputs)
});
/**
* | output |
* | --- |
* | "{column} is over its limit of {limit}." |
*
* @param {Ui_Kanban_Over_LimitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_over_limit = /** @type {((inputs: Ui_Kanban_Over_LimitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Over_LimitInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_over_limit(inputs)
});
/**
* | output |
* | --- |
* | "Picked up “{title}” in {column}, position {position}. Use the arrow keys to move, Space to drop, Escape to cancel." |
*
* @param {Ui_Kanban_Picked_UpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_picked_up = /** @type {((inputs: Ui_Kanban_Picked_UpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_Picked_UpInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_picked_up(inputs)
});
/**
* | output |
* | --- |
* | "{column}, position {position} of {total}." |
*
* @param {Ui_Kanban_PositionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_kanban_position = /** @type {((inputs: Ui_Kanban_PositionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Kanban_PositionInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_kanban_position(inputs)
});
/**
* | output |
* | --- |
* | "Chart data" |
*
* @param {Ui_Line_Chart_CaptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_line_chart_caption = /** @type {((inputs?: Ui_Line_Chart_CaptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Line_Chart_CaptionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_line_chart_caption(inputs)
});
/**
* | output |
* | --- |
* | "Target {value}" |
*
* @param {Ui_Line_Chart_TargetInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_line_chart_target = /** @type {((inputs: Ui_Line_Chart_TargetInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Line_Chart_TargetInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_line_chart_target(inputs)
});
/**
* | output |
* | --- |
* | "(opens in a new tab)" |
*
* @param {Ui_Link_New_TabInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_link_new_tab = /** @type {((inputs?: Ui_Link_New_TabInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Link_New_TabInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_link_new_tab(inputs)
});
/**
* | output |
* | --- |
* | "{column} for {row}" |
*
* @param {Ui_Mapping_Table_ChoiceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mapping_table_choice = /** @type {((inputs: Ui_Mapping_Table_ChoiceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mapping_Table_ChoiceInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mapping_table_choice(inputs)
});
/**
* | output |
* | --- |
* | "Nothing mapped yet." |
*
* @param {Ui_Mapping_Table_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mapping_table_empty = /** @type {((inputs?: Ui_Mapping_Table_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mapping_Table_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mapping_table_empty(inputs)
});
/**
* | output |
* | --- |
* | "Mappings" |
*
* @param {Ui_Mapping_Table_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mapping_table_label = /** @type {((inputs?: Ui_Mapping_Table_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mapping_Table_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mapping_table_label(inputs)
});
/**
* | output |
* | --- |
* | "Remove mapping for {row}" |
*
* @param {Ui_Mapping_Table_RemoveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mapping_table_remove = /** @type {((inputs: Ui_Mapping_Table_RemoveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mapping_Table_RemoveInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mapping_table_remove(inputs)
});
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Ui_Mapping_Table_StatusInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mapping_table_status = /** @type {((inputs?: Ui_Mapping_Table_StatusInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mapping_Table_StatusInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mapping_table_status(inputs)
});
/**
* | output |
* | --- |
* | "Assembly" |
*
* @param {Ui_Mark_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_mark_label = /** @type {((inputs?: Ui_Mark_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Mark_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_mark_label(inputs)
});
/**
* | output |
* | --- |
* | "No" |
*
* @param {Ui_Matrix_Table_NoInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_matrix_table_no = /** @type {((inputs?: Ui_Matrix_Table_NoInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Matrix_Table_NoInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_matrix_table_no(inputs)
});
/**
* | output |
* | --- |
* | "Yes" |
*
* @param {Ui_Matrix_Table_YesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_matrix_table_yes = /** @type {((inputs?: Ui_Matrix_Table_YesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Matrix_Table_YesInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_matrix_table_yes(inputs)
});
/**
* | output |
* | --- |
* | "More actions" |
*
* @param {Ui_Menu_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_menu_label = /** @type {((inputs?: Ui_Menu_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Menu_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_menu_label(inputs)
});
/**
* | output |
* | --- |
* | "{count} of {max} selected" |
*
* @param {Ui_Multi_Select_CountInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_multi_select_count = /** @type {((inputs: Ui_Multi_Select_CountInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Multi_Select_CountInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_multi_select_count(inputs)
});
/**
* | output |
* | --- |
* | "Remove {label}" |
*
* @param {Ui_Multi_Select_RemoveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_multi_select_remove = /** @type {((inputs: Ui_Multi_Select_RemoveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Multi_Select_RemoveInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_multi_select_remove(inputs)
});
/**
* | output |
* | --- |
* | "Pages" |
*
* @param {Ui_Nav_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_nav_list_label = /** @type {((inputs?: Ui_Nav_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Nav_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_nav_list_label(inputs)
});
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Ui_Node_Palette_SearchInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_node_palette_search = /** @type {((inputs?: Ui_Node_Palette_SearchInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Node_Palette_SearchInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_node_palette_search(inputs)
});
/**
* | output |
* | --- |
* | "Decrease" |
*
* @param {Ui_Number_Input_DecreaseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_number_input_decrease = /** @type {((inputs?: Ui_Number_Input_DecreaseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Number_Input_DecreaseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_number_input_decrease(inputs)
});
/**
* | output |
* | --- |
* | "Increase" |
*
* @param {Ui_Number_Input_IncreaseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_number_input_increase = /** @type {((inputs?: Ui_Number_Input_IncreaseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Number_Input_IncreaseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_number_input_increase(inputs)
});
/**
* | output |
* | --- |
* | "Pagination" |
*
* @param {Ui_Pagination_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_label = /** @type {((inputs?: Ui_Pagination_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_label(inputs)
});
/**
* | output |
* | --- |
* | "Next page" |
*
* @param {Ui_Pagination_NextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_next = /** @type {((inputs?: Ui_Pagination_NextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_NextInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_next(inputs)
});
/**
* | output |
* | --- |
* | "items" |
*
* @param {Ui_Pagination_NounInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_noun = /** @type {((inputs?: Ui_Pagination_NounInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_NounInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_noun(inputs)
});
/**
* | output |
* | --- |
* | "of {total} {noun}" |
*
* @param {Ui_Pagination_OfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_of = /** @type {((inputs: Ui_Pagination_OfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_OfInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_of(inputs)
});
/**
* | output |
* | --- |
* | "Page {page}" |
*
* @param {Ui_Pagination_PageInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_page = /** @type {((inputs: Ui_Pagination_PageInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_PageInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_page(inputs)
});
/**
* | output |
* | --- |
* | "Page {page} of {count}" |
*
* @param {Ui_Pagination_Page_OfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_page_of = /** @type {((inputs: Ui_Pagination_Page_OfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_Page_OfInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_page_of(inputs)
});
/**
* | output |
* | --- |
* | "Previous page" |
*
* @param {Ui_Pagination_PreviousInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_previous = /** @type {((inputs?: Ui_Pagination_PreviousInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_PreviousInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_previous(inputs)
});
/**
* | output |
* | --- |
* | "Rows" |
*
* @param {Ui_Pagination_RowsInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_pagination_rows = /** @type {((inputs?: Ui_Pagination_RowsInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Pagination_RowsInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_pagination_rows(inputs)
});
/**
* | output |
* | --- |
* | "Blocked" |
*
* @param {Ui_Phase_Rail_BlockedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_blocked = /** @type {((inputs?: Ui_Phase_Rail_BlockedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_BlockedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_blocked(inputs)
});
/**
* | output |
* | --- |
* | "Checkpoint" |
*
* @param {Ui_Phase_Rail_CheckpointInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_checkpoint = /** @type {((inputs?: Ui_Phase_Rail_CheckpointInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_CheckpointInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_checkpoint(inputs)
});
/**
* | output |
* | --- |
* | "Checkpoint blocked" |
*
* @param {Ui_Phase_Rail_Checkpoint_BlockedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_checkpoint_blocked = /** @type {((inputs?: Ui_Phase_Rail_Checkpoint_BlockedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_Checkpoint_BlockedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_checkpoint_blocked(inputs)
});
/**
* | output |
* | --- |
* | "Checkpoint passed" |
*
* @param {Ui_Phase_Rail_Checkpoint_PassedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_checkpoint_passed = /** @type {((inputs?: Ui_Phase_Rail_Checkpoint_PassedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_Checkpoint_PassedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_checkpoint_passed(inputs)
});
/**
* | output |
* | --- |
* | "In progress" |
*
* @param {Ui_Phase_Rail_CurrentInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_current = /** @type {((inputs?: Ui_Phase_Rail_CurrentInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_CurrentInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_current(inputs)
});
/**
* | output |
* | --- |
* | "Done" |
*
* @param {Ui_Phase_Rail_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_done = /** @type {((inputs?: Ui_Phase_Rail_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_done(inputs)
});
/**
* | output |
* | --- |
* | "Phases" |
*
* @param {Ui_Phase_Rail_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_label = /** @type {((inputs?: Ui_Phase_Rail_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_label(inputs)
});
/**
* | output |
* | --- |
* | "Not started" |
*
* @param {Ui_Phase_Rail_UpcomingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_phase_rail_upcoming = /** @type {((inputs?: Ui_Phase_Rail_UpcomingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Phase_Rail_UpcomingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_phase_rail_upcoming(inputs)
});
/**
* | output |
* | --- |
* | "{label} · {time}" |
*
* @param {Ui_Playback_Bar_MarkerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_marker = /** @type {((inputs: Ui_Playback_Bar_MarkerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_MarkerInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_marker(inputs)
});
/**
* | output |
* | --- |
* | "Next marker" |
*
* @param {Ui_Playback_Bar_NextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_next = /** @type {((inputs?: Ui_Playback_Bar_NextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_NextInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_next(inputs)
});
/**
* | output |
* | --- |
* | "Pause" |
*
* @param {Ui_Playback_Bar_PauseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_pause = /** @type {((inputs?: Ui_Playback_Bar_PauseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_PauseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_pause(inputs)
});
/**
* | output |
* | --- |
* | "Play" |
*
* @param {Ui_Playback_Bar_PlayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_play = /** @type {((inputs?: Ui_Playback_Bar_PlayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_PlayInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_play(inputs)
});
/**
* | output |
* | --- |
* | "Playback position" |
*
* @param {Ui_Playback_Bar_PositionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_position = /** @type {((inputs?: Ui_Playback_Bar_PositionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_PositionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_position(inputs)
});
/**
* | output |
* | --- |
* | "Previous marker" |
*
* @param {Ui_Playback_Bar_PreviousInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_previous = /** @type {((inputs?: Ui_Playback_Bar_PreviousInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_PreviousInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_previous(inputs)
});
/**
* | output |
* | --- |
* | "Playback speed" |
*
* @param {Ui_Playback_Bar_SpeedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_speed = /** @type {((inputs?: Ui_Playback_Bar_SpeedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_SpeedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_speed(inputs)
});
/**
* | output |
* | --- |
* | "{speed}×" |
*
* @param {Ui_Playback_Bar_Speed_OptionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_playback_bar_speed_option = /** @type {((inputs: Ui_Playback_Bar_Speed_OptionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Playback_Bar_Speed_OptionInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_playback_bar_speed_option(inputs)
});
/**
* | output |
* | --- |
* | "Options" |
*
* @param {Ui_Popover_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_popover_label = /** @type {((inputs?: Ui_Popover_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Popover_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_popover_label(inputs)
});
/**
* | output |
* | --- |
* | "Progress" |
*
* @param {Ui_Progress_Bar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_progress_bar_label = /** @type {((inputs?: Ui_Progress_Bar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Progress_Bar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_progress_bar_label(inputs)
});
/**
* | output |
* | --- |
* | "Answer" |
*
* @param {Ui_Question_Card_AnswerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_answer = /** @type {((inputs?: Ui_Question_Card_AnswerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_AnswerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_answer(inputs)
});
/**
* | output |
* | --- |
* | "Change" |
*
* @param {Ui_Question_Card_ChangeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_change = /** @type {((inputs?: Ui_Question_Card_ChangeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_ChangeInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_change(inputs)
});
/**
* | output |
* | --- |
* | "Ask later" |
*
* @param {Ui_Question_Card_LaterInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_later = /** @type {((inputs?: Ui_Question_Card_LaterInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_LaterInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_later(inputs)
});
/**
* | output |
* | --- |
* | "Something else" |
*
* @param {Ui_Question_Card_OtherInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_other = /** @type {((inputs?: Ui_Question_Card_OtherInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_OtherInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_other(inputs)
});
/**
* | output |
* | --- |
* | "Suggested" |
*
* @param {Ui_Question_Card_SuggestedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_suggested = /** @type {((inputs?: Ui_Question_Card_SuggestedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_SuggestedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_suggested(inputs)
});
/**
* | output |
* | --- |
* | "Your answer" |
*
* @param {Ui_Question_Card_Your_AnswerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_question_card_your_answer = /** @type {((inputs?: Ui_Question_Card_Your_AnswerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Question_Card_Your_AnswerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_question_card_your_answer(inputs)
});
/**
* | output |
* | --- |
* | "What to do with {group}" |
*
* @param {Ui_Reassign_List_Action_ForInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_action_for = /** @type {((inputs: Ui_Reassign_List_Action_ForInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_Action_ForInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_action_for(inputs)
});
/**
* | output |
* | --- |
* | "and {count} more" |
*
* @param {Ui_Reassign_List_And_MoreInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_and_more = /** @type {((inputs: Ui_Reassign_List_And_MoreInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_And_MoreInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_and_more(inputs)
});
/**
* | output |
* | --- |
* | "Reassign to…" |
*
* @param {Ui_Reassign_List_AssignInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_assign = /** @type {((inputs?: Ui_Reassign_List_AssignInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_AssignInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_assign(inputs)
});
/**
* | output |
* | --- |
* | "Reassign {group} to" |
*
* @param {Ui_Reassign_List_Assign_GroupInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_assign_group = /** @type {((inputs: Ui_Reassign_List_Assign_GroupInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_Assign_GroupInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_assign_group(inputs)
});
/**
* | output |
* | --- |
* | "Reassign {item} to" |
*
* @param {Ui_Reassign_List_Assign_ItemInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_assign_item = /** @type {((inputs: Ui_Reassign_List_Assign_ItemInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_Assign_ItemInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_assign_item(inputs)
});
/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Ui_Reassign_List_ChooseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_choose = /** @type {((inputs?: Ui_Reassign_List_ChooseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_ChooseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_choose(inputs)
});
/**
* | output |
* | --- |
* | "Hide items" |
*
* @param {Ui_Reassign_List_HideInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_hide = /** @type {((inputs?: Ui_Reassign_List_HideInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_HideInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_hide(inputs)
});
/**
* | output |
* | --- |
* | "Nothing to reassign" |
*
* @param {Ui_Reassign_List_NothingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_nothing = /** @type {((inputs?: Ui_Reassign_List_NothingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_NothingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_nothing(inputs)
});
/**
* | output |
* | --- |
* | "Choose where everything above goes." |
*
* @param {Ui_Reassign_List_PendingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_pending = /** @type {((inputs?: Ui_Reassign_List_PendingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_PendingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_pending(inputs)
});
/**
* | output |
* | --- |
* | "Chosen per item" |
*
* @param {Ui_Reassign_List_Per_ItemInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_per_item = /** @type {((inputs?: Ui_Reassign_List_Per_ItemInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_Per_ItemInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_per_item(inputs)
});
/**
* | output |
* | --- |
* | "Pick for each item" |
*
* @param {Ui_Reassign_List_PickInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_pick = /** @type {((inputs?: Ui_Reassign_List_PickInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_PickInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_pick(inputs)
});
/**
* | output |
* | --- |
* | "Everything is reassigned." |
*
* @param {Ui_Reassign_List_ReadyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_reassign_list_ready = /** @type {((inputs?: Ui_Reassign_List_ReadyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Reassign_List_ReadyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_reassign_list_ready(inputs)
});
/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Ui_Request_Card_ApproveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_approve = /** @type {((inputs?: Ui_Request_Card_ApproveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_ApproveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_approve(inputs)
});
/**
* | output |
* | --- |
* | "Approve for" |
*
* @param {Ui_Request_Card_Approve_ForInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_approve_for = /** @type {((inputs?: Ui_Request_Card_Approve_ForInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_Approve_ForInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_approve_for(inputs)
});
/**
* | output |
* | --- |
* | "Back" |
*
* @param {Ui_Request_Card_BackInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_back = /** @type {((inputs?: Ui_Request_Card_BackInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_BackInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_back(inputs)
});
/**
* | output |
* | --- |
* | "Deny…" |
*
* @param {Ui_Request_Card_DenyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_deny = /** @type {((inputs?: Ui_Request_Card_DenyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_DenyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_deny(inputs)
});
/**
* | output |
* | --- |
* | "Deny request" |
*
* @param {Ui_Request_Card_Deny_ConfirmInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_deny_confirm = /** @type {((inputs?: Ui_Request_Card_Deny_ConfirmInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_Deny_ConfirmInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_deny_confirm(inputs)
});
/**
* | output |
* | --- |
* | "Why not? They’ll see this." |
*
* @param {Ui_Request_Card_Deny_ReasonInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_deny_reason = /** @type {((inputs?: Ui_Request_Card_Deny_ReasonInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_Deny_ReasonInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_deny_reason(inputs)
});
/**
* | output |
* | --- |
* | "End now" |
*
* @param {Ui_Request_Card_EndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_request_card_end = /** @type {((inputs?: Ui_Request_Card_EndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Request_Card_EndInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_request_card_end(inputs)
});
/**
* | output |
* | --- |
* | "Add condition" |
*
* @param {Ui_Rule_Builder_Add_ConditionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_add_condition = /** @type {((inputs?: Ui_Rule_Builder_Add_ConditionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Add_ConditionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_add_condition(inputs)
});
/**
* | output |
* | --- |
* | "Add rule" |
*
* @param {Ui_Rule_Builder_Add_RuleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_add_rule = /** @type {((inputs?: Ui_Rule_Builder_Add_RuleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Add_RuleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_add_rule(inputs)
});
/**
* | output |
* | --- |
* | "checked" |
*
* @param {Ui_Rule_Builder_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_checked = /** @type {((inputs?: Ui_Rule_Builder_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_checked(inputs)
});
/**
* | output |
* | --- |
* | "Condition" |
*
* @param {Ui_Rule_Builder_ConditionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_condition = /** @type {((inputs?: Ui_Rule_Builder_ConditionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_ConditionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_condition(inputs)
});
/**
* | output |
* | --- |
* | "Delete rule" |
*
* @param {Ui_Rule_Builder_DeleteInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_delete = /** @type {((inputs?: Ui_Rule_Builder_DeleteInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_DeleteInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_delete(inputs)
});
/**
* | output |
* | --- |
* | "Field" |
*
* @param {Ui_Rule_Builder_FieldInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_field = /** @type {((inputs?: Ui_Rule_Builder_FieldInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_FieldInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_field(inputs)
});
/**
* | output |
* | --- |
* | "If" |
*
* @param {Ui_Rule_Builder_IfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_if = /** @type {((inputs?: Ui_Rule_Builder_IfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_IfInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_if(inputs)
});
/**
* | output |
* | --- |
* | "AND" |
*
* @param {Ui_Rule_Builder_Kw_AndInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_kw_and = /** @type {((inputs?: Ui_Rule_Builder_Kw_AndInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Kw_AndInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_kw_and(inputs)
});
/**
* | output |
* | --- |
* | "IF" |
*
* @param {Ui_Rule_Builder_Kw_IfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_kw_if = /** @type {((inputs?: Ui_Rule_Builder_Kw_IfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Kw_IfInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_kw_if(inputs)
});
/**
* | output |
* | --- |
* | "OTHERWISE" |
*
* @param {Ui_Rule_Builder_Kw_OtherwiseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_kw_otherwise = /** @type {((inputs?: Ui_Rule_Builder_Kw_OtherwiseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Kw_OtherwiseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_kw_otherwise(inputs)
});
/**
* | output |
* | --- |
* | "THEN" |
*
* @param {Ui_Rule_Builder_Kw_ThenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_kw_then = /** @type {((inputs?: Ui_Rule_Builder_Kw_ThenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Kw_ThenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_kw_then(inputs)
});
/**
* | output |
* | --- |
* | "Rules, first match wins" |
*
* @param {Ui_Rule_Builder_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_label = /** @type {((inputs?: Ui_Rule_Builder_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_label(inputs)
});
/**
* | output |
* | --- |
* | "The test answers land here" |
*
* @param {Ui_Rule_Builder_Lands_HereInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_lands_here = /** @type {((inputs?: Ui_Rule_Builder_Lands_HereInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Lands_HereInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_lands_here(inputs)
});
/**
* | output |
* | --- |
* | "Matches the test answers" |
*
* @param {Ui_Rule_Builder_MatchesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_matches = /** @type {((inputs?: Ui_Rule_Builder_MatchesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_MatchesInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_matches(inputs)
});
/**
* | output |
* | --- |
* | "Move rule down" |
*
* @param {Ui_Rule_Builder_Move_DownInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_move_down = /** @type {((inputs?: Ui_Rule_Builder_Move_DownInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Move_DownInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_move_down(inputs)
});
/**
* | output |
* | --- |
* | "Move rule up" |
*
* @param {Ui_Rule_Builder_Move_UpInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_move_up = /** @type {((inputs?: Ui_Rule_Builder_Move_UpInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Move_UpInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_move_up(inputs)
});
/**
* | output |
* | --- |
* | "not checked" |
*
* @param {Ui_Rule_Builder_Not_CheckedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_not_checked = /** @type {((inputs?: Ui_Rule_Builder_Not_CheckedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Not_CheckedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_not_checked(inputs)
});
/**
* | output |
* | --- |
* | "Remove condition" |
*
* @param {Ui_Rule_Builder_Remove_ConditionInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_remove_condition = /** @type {((inputs?: Ui_Rule_Builder_Remove_ConditionInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Remove_ConditionInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_remove_condition(inputs)
});
/**
* | output |
* | --- |
* | "Rule {number}" |
*
* @param {Ui_Rule_Builder_RuleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_rule = /** @type {((inputs: Ui_Rule_Builder_RuleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_RuleInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_rule(inputs)
});
/**
* | output |
* | --- |
* | "then" |
*
* @param {Ui_Rule_Builder_Then_LowerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_then_lower = /** @type {((inputs?: Ui_Rule_Builder_Then_LowerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_Then_LowerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_then_lower(inputs)
});
/**
* | output |
* | --- |
* | "Value" |
*
* @param {Ui_Rule_Builder_ValueInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_builder_value = /** @type {((inputs?: Ui_Rule_Builder_ValueInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Builder_ValueInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_builder_value(inputs)
});
/**
* | output |
* | --- |
* | "Off" |
*
* @param {Ui_Rule_Row_OffInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_row_off = /** @type {((inputs?: Ui_Rule_Row_OffInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Row_OffInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_row_off(inputs)
});
/**
* | output |
* | --- |
* | "On" |
*
* @param {Ui_Rule_Row_OnInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_rule_row_on = /** @type {((inputs?: Ui_Rule_Row_OnInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Rule_Row_OnInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_rule_row_on(inputs)
});
/**
* | output |
* | --- |
* | "Encrypted when saved. It is never shown again, to anyone." |
*
* @param {Ui_Secret_Field_HelperInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_helper = /** @type {((inputs?: Ui_Secret_Field_HelperInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_HelperInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_helper(inputs)
});
/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Ui_Secret_Field_HideInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_hide = /** @type {((inputs?: Ui_Secret_Field_HideInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_HideInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_hide(inputs)
});
/**
* | output |
* | --- |
* | "Secret" |
*
* @param {Ui_Secret_Field_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_label = /** @type {((inputs?: Ui_Secret_Field_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_label(inputs)
});
/**
* | output |
* | --- |
* | "•••• •••• {last4}" |
*
* @param {Ui_Secret_Field_MaskInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_mask = /** @type {((inputs: Ui_Secret_Field_MaskInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_MaskInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_mask(inputs)
});
/**
* | output |
* | --- |
* | "Replace" |
*
* @param {Ui_Secret_Field_ReplaceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_replace = /** @type {((inputs?: Ui_Secret_Field_ReplaceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_ReplaceInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_replace(inputs)
});
/**
* | output |
* | --- |
* | "Show while typing" |
*
* @param {Ui_Secret_Field_ShowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_secret_field_show = /** @type {((inputs?: Ui_Secret_Field_ShowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Secret_Field_ShowInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_secret_field_show(inputs)
});
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Ui_Settings_Nav_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_settings_nav_label = /** @type {((inputs?: Ui_Settings_Nav_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Settings_Nav_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_settings_nav_label(inputs)
});
/**
* | output |
* | --- |
* | "Add" |
*
* @param {Ui_Share_List_AddInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_add = /** @type {((inputs?: Ui_Share_List_AddInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_AddInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_add(inputs)
});
/**
* | output |
* | --- |
* | "Add someone" |
*
* @param {Ui_Share_List_Add_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_add_label = /** @type {((inputs?: Ui_Share_List_Add_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_Add_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_add_label(inputs)
});
/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Ui_Share_List_ChooseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_choose = /** @type {((inputs?: Ui_Share_List_ChooseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_ChooseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_choose(inputs)
});
/**
* | output |
* | --- |
* | "Who has access" |
*
* @param {Ui_Share_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_label = /** @type {((inputs?: Ui_Share_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_label(inputs)
});
/**
* | output |
* | --- |
* | "Access" |
*
* @param {Ui_Share_List_LevelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_level = /** @type {((inputs?: Ui_Share_List_LevelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_LevelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_level(inputs)
});
/**
* | output |
* | --- |
* | "{level} for {name}" |
*
* @param {Ui_Share_List_Level_ForInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_level_for = /** @type {((inputs: Ui_Share_List_Level_ForInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_Level_ForInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_level_for(inputs)
});
/**
* | output |
* | --- |
* | "No access" |
*
* @param {Ui_Share_List_NoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_none = /** @type {((inputs?: Ui_Share_List_NoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_NoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_none(inputs)
});
/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Ui_Share_List_RemoveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_share_list_remove = /** @type {((inputs: Ui_Share_List_RemoveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Share_List_RemoveInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_share_list_remove(inputs)
});
/**
* | output |
* | --- |
* | "Hide menu" |
*
* @param {Ui_Sidebar_CollapseInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sidebar_collapse = /** @type {((inputs?: Ui_Sidebar_CollapseInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sidebar_CollapseInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sidebar_collapse(inputs)
});
/**
* | output |
* | --- |
* | "Pages in {label}" |
*
* @param {Ui_Sidebar_Group_ToggleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sidebar_group_toggle = /** @type {((inputs: Ui_Sidebar_Group_ToggleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sidebar_Group_ToggleInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sidebar_group_toggle(inputs)
});
/**
* | output |
* | --- |
* | "Main" |
*
* @param {Ui_Sidebar_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sidebar_label = /** @type {((inputs?: Ui_Sidebar_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sidebar_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sidebar_label(inputs)
});
/**
* | output |
* | --- |
* | "All {count}" |
*
* @param {Ui_Source_List_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_source_list_all = /** @type {((inputs: Ui_Source_List_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Source_List_AllInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_source_list_all(inputs)
});
/**
* | output |
* | --- |
* | "Nothing here." |
*
* @param {Ui_Source_List_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_source_list_empty = /** @type {((inputs?: Ui_Source_List_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Source_List_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_source_list_empty(inputs)
});
/**
* | output |
* | --- |
* | "Filter" |
*
* @param {Ui_Source_List_FilterInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_source_list_filter = /** @type {((inputs?: Ui_Source_List_FilterInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Source_List_FilterInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_source_list_filter(inputs)
});
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Ui_Source_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_source_list_label = /** @type {((inputs?: Ui_Source_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Source_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_source_list_label(inputs)
});
/**
* | output |
* | --- |
* | "Remove {label}" |
*
* @param {Ui_Source_List_RemoveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_source_list_remove = /** @type {((inputs: Ui_Source_List_RemoveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Source_List_RemoveInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_source_list_remove(inputs)
});
/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Ui_Spinner_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_spinner_label = /** @type {((inputs?: Ui_Spinner_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Spinner_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_spinner_label(inputs)
});
/**
* | output |
* | --- |
* | "—" |
*
* @param {Ui_Status_Row_UnknownInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_status_row_unknown = /** @type {((inputs?: Ui_Status_Row_UnknownInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Status_Row_UnknownInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_status_row_unknown(inputs)
});
/**
* | output |
* | --- |
* | "(completed)" |
*
* @param {Ui_Stepper_CompletedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_stepper_completed = /** @type {((inputs?: Ui_Stepper_CompletedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Stepper_CompletedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_stepper_completed(inputs)
});
/**
* | output |
* | --- |
* | "(current step)" |
*
* @param {Ui_Stepper_CurrentInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_stepper_current = /** @type {((inputs?: Ui_Stepper_CurrentInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Stepper_CurrentInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_stepper_current(inputs)
});
/**
* | output |
* | --- |
* | "Progress" |
*
* @param {Ui_Stepper_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_stepper_label = /** @type {((inputs?: Ui_Stepper_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Stepper_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_stepper_label(inputs)
});
/**
* | output |
* | --- |
* | "Approve and run" |
*
* @param {Ui_Suggestion_Card_AcceptInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_accept = /** @type {((inputs?: Ui_Suggestion_Card_AcceptInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_AcceptInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_accept(inputs)
});
/**
* | output |
* | --- |
* | "{value}% sure" |
*
* @param {Ui_Suggestion_Card_ConfidenceInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_confidence = /** @type {((inputs: Ui_Suggestion_Card_ConfidenceInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_ConfidenceInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_confidence(inputs)
});
/**
* | output |
* | --- |
* | "How sure the suggestion is" |
*
* @param {Ui_Suggestion_Card_Confidence_HintInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_confidence_hint = /** @type {((inputs?: Ui_Suggestion_Card_Confidence_HintInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_Confidence_HintInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_confidence_hint(inputs)
});
/**
* | output |
* | --- |
* | "Done" |
*
* @param {Ui_Suggestion_Card_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_done = /** @type {((inputs?: Ui_Suggestion_Card_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_done(inputs)
});
/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Ui_Suggestion_Card_EditInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_edit = /** @type {((inputs?: Ui_Suggestion_Card_EditInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_EditInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_edit(inputs)
});
/**
* | output |
* | --- |
* | "Suggestion" |
*
* @param {Ui_Suggestion_Card_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_label = /** @type {((inputs?: Ui_Suggestion_Card_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_label(inputs)
});
/**
* | output |
* | --- |
* | "Proposes" |
*
* @param {Ui_Suggestion_Card_ProposedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_proposed = /** @type {((inputs?: Ui_Suggestion_Card_ProposedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_ProposedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_proposed(inputs)
});
/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Ui_Suggestion_Card_RejectInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_reject = /** @type {((inputs?: Ui_Suggestion_Card_RejectInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_RejectInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_reject(inputs)
});
/**
* | output |
* | --- |
* | "Rejected" |
*
* @param {Ui_Suggestion_Card_RejectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_rejected = /** @type {((inputs?: Ui_Suggestion_Card_RejectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_RejectedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_rejected(inputs)
});
/**
* | output |
* | --- |
* | "Working…" |
*
* @param {Ui_Suggestion_Card_RunningInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_running = /** @type {((inputs?: Ui_Suggestion_Card_RunningInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_RunningInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_running(inputs)
});
/**
* | output |
* | --- |
* | "(done)" |
*
* @param {Ui_Suggestion_Card_Step_DoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_suggestion_card_step_done = /** @type {((inputs?: Ui_Suggestion_Card_Step_DoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Suggestion_Card_Step_DoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_suggestion_card_step_done(inputs)
});
/**
* | output |
* | --- |
* | "Sync failed" |
*
* @param {Ui_Sync_Status_ErrorInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_error = /** @type {((inputs?: Ui_Sync_Status_ErrorInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_ErrorInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_error(inputs)
});
/**
* | output |
* | --- |
* | "{state} from {source}" |
*
* @param {Ui_Sync_Status_FromInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_from = /** @type {((inputs: Ui_Sync_Status_FromInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_FromInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_from(inputs)
});
/**
* | output |
* | --- |
* | "Synced" |
*
* @param {Ui_Sync_Status_OkInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_ok = /** @type {((inputs?: Ui_Sync_Status_OkInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_OkInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_ok(inputs)
});
/**
* | output |
* | --- |
* | "Paused" |
*
* @param {Ui_Sync_Status_PausedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_paused = /** @type {((inputs?: Ui_Sync_Status_PausedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_PausedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_paused(inputs)
});
/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Ui_Sync_Status_RetryInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_retry = /** @type {((inputs?: Ui_Sync_Status_RetryInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_RetryInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_retry(inputs)
});
/**
* | output |
* | --- |
* | "Sync now" |
*
* @param {Ui_Sync_Status_Sync_NowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_sync_now = /** @type {((inputs?: Ui_Sync_Status_Sync_NowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_Sync_NowInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_sync_now(inputs)
});
/**
* | output |
* | --- |
* | "Syncing" |
*
* @param {Ui_Sync_Status_SyncingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_syncing = /** @type {((inputs?: Ui_Sync_Status_SyncingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_SyncingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_syncing(inputs)
});
/**
* | output |
* | --- |
* | "{state} with {source}" |
*
* @param {Ui_Sync_Status_WithInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_sync_status_with = /** @type {((inputs: Ui_Sync_Status_WithInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Sync_Status_WithInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_sync_status_with(inputs)
});
/**
* | output |
* | --- |
* | "Nothing here yet." |
*
* @param {Ui_Table_EmptyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_table_empty = /** @type {((inputs?: Ui_Table_EmptyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Table_EmptyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_table_empty(inputs)
});
/**
* | output |
* | --- |
* | "row {index}" |
*
* @param {Ui_Table_Row_NameInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_table_row_name = /** @type {((inputs: Ui_Table_Row_NameInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Table_Row_NameInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_table_row_name(inputs)
});
/**
* | output |
* | --- |
* | "Select all rows on this page" |
*
* @param {Ui_Table_Select_AllInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_table_select_all = /** @type {((inputs?: Ui_Table_Select_AllInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Table_Select_AllInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_table_select_all(inputs)
});
/**
* | output |
* | --- |
* | "Select {name}" |
*
* @param {Ui_Table_Select_RowInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_table_select_row = /** @type {((inputs: Ui_Table_Select_RowInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Table_Select_RowInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_table_select_row(inputs)
});
/**
* | output |
* | --- |
* | "Assembling…" |
*
* @param {Ui_Thinking_Orb_AssemblingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_assembling = /** @type {((inputs?: Ui_Thinking_Orb_AssemblingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_AssemblingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_assembling(inputs)
});
/**
* | output |
* | --- |
* | "Thinking…" |
*
* @param {Ui_Thinking_Orb_BreathingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_breathing = /** @type {((inputs?: Ui_Thinking_Orb_BreathingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_BreathingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_breathing(inputs)
});
/**
* | output |
* | --- |
* | "Composing…" |
*
* @param {Ui_Thinking_Orb_ComposingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_composing = /** @type {((inputs?: Ui_Thinking_Orb_ComposingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_ComposingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_composing(inputs)
});
/**
* | output |
* | --- |
* | "Connecting…" |
*
* @param {Ui_Thinking_Orb_ConnectingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_connecting = /** @type {((inputs?: Ui_Thinking_Orb_ConnectingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_ConnectingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_connecting(inputs)
});
/**
* | output |
* | --- |
* | "Listening…" |
*
* @param {Ui_Thinking_Orb_ListeningInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_listening = /** @type {((inputs?: Ui_Thinking_Orb_ListeningInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_ListeningInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_listening(inputs)
});
/**
* | output |
* | --- |
* | "Searching…" |
*
* @param {Ui_Thinking_Orb_SearchingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_searching = /** @type {((inputs?: Ui_Thinking_Orb_SearchingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_SearchingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_searching(inputs)
});
/**
* | output |
* | --- |
* | "Shaping…" |
*
* @param {Ui_Thinking_Orb_ShapingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_shaping = /** @type {((inputs?: Ui_Thinking_Orb_ShapingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_ShapingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_shaping(inputs)
});
/**
* | output |
* | --- |
* | "Solving…" |
*
* @param {Ui_Thinking_Orb_SolvingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_solving = /** @type {((inputs?: Ui_Thinking_Orb_SolvingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_SolvingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_solving(inputs)
});
/**
* | output |
* | --- |
* | "Weaving…" |
*
* @param {Ui_Thinking_Orb_WeavingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_weaving = /** @type {((inputs?: Ui_Thinking_Orb_WeavingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_WeavingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_weaving(inputs)
});
/**
* | output |
* | --- |
* | "Working…" |
*
* @param {Ui_Thinking_Orb_WorkingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thinking_orb_working = /** @type {((inputs?: Ui_Thinking_Orb_WorkingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thinking_Orb_WorkingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thinking_orb_working(inputs)
});
/**
* | output |
* | --- |
* | "⌘ + Enter to send" |
*
* @param {Ui_Thread_HintInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_hint = /** @type {((inputs?: Ui_Thread_HintInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_HintInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_hint(inputs)
});
/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Ui_Thread_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_label = /** @type {((inputs?: Ui_Thread_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_label(inputs)
});
/**
* | output |
* | --- |
* | "Reply… use @ to mention" |
*
* @param {Ui_Thread_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_placeholder = /** @type {((inputs?: Ui_Thread_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Reopen" |
*
* @param {Ui_Thread_ReopenInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_reopen = /** @type {((inputs?: Ui_Thread_ReopenInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_ReopenInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_reopen(inputs)
});
/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Ui_Thread_ReplyInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_reply = /** @type {((inputs?: Ui_Thread_ReplyInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_ReplyInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_reply(inputs)
});
/**
* | output |
* | --- |
* | "Resolve" |
*
* @param {Ui_Thread_ResolveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_resolve = /** @type {((inputs?: Ui_Thread_ResolveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_ResolveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_resolve(inputs)
});
/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Ui_Thread_SendInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_thread_send = /** @type {((inputs?: Ui_Thread_SendInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Thread_SendInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_thread_send(inputs)
});
/**
* | output |
* | --- |
* | "{label}: {value} of {limit}" |
*
* @param {Ui_Threshold_Meter_AriaInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_aria = /** @type {((inputs: Ui_Threshold_Meter_AriaInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_AriaInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_aria(inputs)
});
/**
* | output |
* | --- |
* | "by {when}" |
*
* @param {Ui_Threshold_Meter_ByInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_by = /** @type {((inputs: Ui_Threshold_Meter_ByInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_ByInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_by(inputs)
});
/**
* | output |
* | --- |
* | "· {context}" |
*
* @param {Ui_Threshold_Meter_ContextInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_context = /** @type {((inputs: Ui_Threshold_Meter_ContextInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_ContextInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_context(inputs)
});
/**
* | output |
* | --- |
* | "· passes the limit around {when}" |
*
* @param {Ui_Threshold_Meter_CrossesInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_crosses = /** @type {((inputs: Ui_Threshold_Meter_CrossesInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_CrossesInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_crosses(inputs)
});
/**
* | output |
* | --- |
* | "Used" |
*
* @param {Ui_Threshold_Meter_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_label = /** @type {((inputs?: Ui_Threshold_Meter_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_label(inputs)
});
/**
* | output |
* | --- |
* | "Limit" |
*
* @param {Ui_Threshold_Meter_LimitInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_limit = /** @type {((inputs?: Ui_Threshold_Meter_LimitInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_LimitInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_limit(inputs)
});
/**
* | output |
* | --- |
* | "of {limit}" |
*
* @param {Ui_Threshold_Meter_OfInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_of = /** @type {((inputs: Ui_Threshold_Meter_OfInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_OfInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_of(inputs)
});
/**
* | output |
* | --- |
* | "· over the limit" |
*
* @param {Ui_Threshold_Meter_OverInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_over = /** @type {((inputs?: Ui_Threshold_Meter_OverInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_OverInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_over(inputs)
});
/**
* | output |
* | --- |
* | "Projected {value}" |
*
* @param {Ui_Threshold_Meter_ProjectedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_projected = /** @type {((inputs: Ui_Threshold_Meter_ProjectedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_ProjectedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_projected(inputs)
});
/**
* | output |
* | --- |
* | "{percent} used" |
*
* @param {Ui_Threshold_Meter_UsedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_used = /** @type {((inputs: Ui_Threshold_Meter_UsedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_UsedInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_used(inputs)
});
/**
* | output |
* | --- |
* | "· within the limit" |
*
* @param {Ui_Threshold_Meter_WithinInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_threshold_meter_within = /** @type {((inputs?: Ui_Threshold_Meter_WithinInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Threshold_Meter_WithinInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_threshold_meter_within(inputs)
});
/**
* | output |
* | --- |
* | "Use a time like 08:30 or 8:30pm." |
*
* @param {Ui_Time_Picker_InvalidInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_time_picker_invalid = /** @type {((inputs?: Ui_Time_Picker_InvalidInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Time_Picker_InvalidInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_time_picker_invalid(inputs)
});
/**
* | output |
* | --- |
* | "Times" |
*
* @param {Ui_Time_Picker_ListInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_time_picker_list = /** @type {((inputs?: Ui_Time_Picker_ListInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Time_Picker_ListInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_time_picker_list(inputs)
});
/**
* | output |
* | --- |
* | "Use a time between {min} and {max}." |
*
* @param {Ui_Time_Picker_Out_Of_RangeInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_time_picker_out_of_range = /** @type {((inputs: Ui_Time_Picker_Out_Of_RangeInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Time_Picker_Out_Of_RangeInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_time_picker_out_of_range(inputs)
});
/**
* | output |
* | --- |
* | "hh:mm" |
*
* @param {Ui_Time_Picker_PlaceholderInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_time_picker_placeholder = /** @type {((inputs?: Ui_Time_Picker_PlaceholderInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Time_Picker_PlaceholderInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_time_picker_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "· {status}" |
*
* @param {Ui_Timeline_StatusInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_status = /** @type {((inputs: Ui_Timeline_StatusInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_StatusInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_status(inputs)
});
/**
* | output |
* | --- |
* | "in progress" |
*
* @param {Ui_Timeline_Tone_ActiveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_active = /** @type {((inputs?: Ui_Timeline_Tone_ActiveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_ActiveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_active(inputs)
});
/**
* | output |
* | --- |
* | "failed" |
*
* @param {Ui_Timeline_Tone_DangerInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_danger = /** @type {((inputs?: Ui_Timeline_Tone_DangerInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_DangerInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_danger(inputs)
});
/**
* | output |
* | --- |
* | "pending" |
*
* @param {Ui_Timeline_Tone_PendingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_pending = /** @type {((inputs?: Ui_Timeline_Tone_PendingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_PendingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_pending(inputs)
});
/**
* | output |
* | --- |
* | "skipped" |
*
* @param {Ui_Timeline_Tone_SkippedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_skipped = /** @type {((inputs?: Ui_Timeline_Tone_SkippedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_SkippedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_skipped(inputs)
});
/**
* | output |
* | --- |
* | "succeeded" |
*
* @param {Ui_Timeline_Tone_SuccessInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_success = /** @type {((inputs?: Ui_Timeline_Tone_SuccessInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_SuccessInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_success(inputs)
});
/**
* | output |
* | --- |
* | "needs attention" |
*
* @param {Ui_Timeline_Tone_WarningInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_tone_warning = /** @type {((inputs?: Ui_Timeline_Tone_WarningInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_Tone_WarningInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_tone_warning(inputs)
});
/**
* | output |
* | --- |
* | "—" |
*
* @param {Ui_Timeline_UnknownInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_timeline_unknown = /** @type {((inputs?: Ui_Timeline_UnknownInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Timeline_UnknownInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_timeline_unknown(inputs)
});
/**
* | output |
* | --- |
* | "Dismiss" |
*
* @param {Ui_Toast_DismissInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_toast_dismiss = /** @type {((inputs?: Ui_Toast_DismissInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Toast_DismissInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_toast_dismiss(inputs)
});
/**
* | output |
* | --- |
* | "{value} tokens" |
*
* @param {Ui_Tokens_CountInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_tokens_count = /** @type {((inputs: Ui_Tokens_CountInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Tokens_CountInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_tokens_count(inputs)
});
/**
* | output |
* | --- |
* | "Breadcrumb" |
*
* @param {Ui_Top_Bar_BreadcrumbInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_top_bar_breadcrumb = /** @type {((inputs?: Ui_Top_Bar_BreadcrumbInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Top_Bar_BreadcrumbInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_top_bar_breadcrumb(inputs)
});
/**
* | output |
* | --- |
* | "Degraded" |
*
* @param {Ui_Uptime_DegradedInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_degraded = /** @type {((inputs?: Ui_Uptime_DegradedInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_DegradedInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_degraded(inputs)
});
/**
* | output |
* | --- |
* | "Down" |
*
* @param {Ui_Uptime_DownInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_down = /** @type {((inputs?: Ui_Uptime_DownInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_DownInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_down(inputs)
});
/**
* | output |
* | --- |
* | "uptime" |
*
* @param {Ui_Uptime_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_label = /** @type {((inputs?: Ui_Uptime_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_label(inputs)
});
/**
* | output |
* | --- |
* | "No data" |
*
* @param {Ui_Uptime_NoneInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_none = /** @type {((inputs?: Ui_Uptime_NoneInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_NoneInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_none(inputs)
});
/**
* | output |
* | --- |
* | "Operational" |
*
* @param {Ui_Uptime_OkInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_ok = /** @type {((inputs?: Ui_Uptime_OkInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_OkInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_ok(inputs)
});
/**
* | output |
* | --- |
* | "{title}: {ok} operational, {degraded} degraded, {down} down" |
*
* @param {Ui_Uptime_SummaryInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_summary = /** @type {((inputs: Ui_Uptime_SummaryInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_SummaryInputs, { locale?: "en" }, {}>} */ ((inputs, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_summary(inputs)
});
/**
* | output |
* | --- |
* | "Availability" |
*
* @param {Ui_Uptime_TitleInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_title = /** @type {((inputs?: Ui_Uptime_TitleInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_TitleInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_title(inputs)
});
/**
* | output |
* | --- |
* | "Today" |
*
* @param {Ui_Uptime_TodayInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_uptime_today = /** @type {((inputs?: Ui_Uptime_TodayInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Uptime_TodayInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_uptime_today(inputs)
});
/**
* | output |
* | --- |
* | "Comparing" |
*
* @param {Ui_Version_List_ComparingInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_version_list_comparing = /** @type {((inputs?: Ui_Version_List_ComparingInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Version_List_ComparingInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_version_list_comparing(inputs)
});
/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Ui_Version_List_DraftInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_version_list_draft = /** @type {((inputs?: Ui_Version_List_DraftInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Version_List_DraftInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_version_list_draft(inputs)
});
/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Ui_Version_List_LabelInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_version_list_label = /** @type {((inputs?: Ui_Version_List_LabelInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Version_List_LabelInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_version_list_label(inputs)
});
/**
* | output |
* | --- |
* | "Live" |
*
* @param {Ui_Version_List_LiveInputs} inputs
* @param {{ locale?: "en" }} options
* @returns {LocalizedString}
*/
export const ui_version_list_live = /** @type {((inputs?: Ui_Version_List_LiveInputs, options?: { locale?: "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Version_List_LiveInputs, { locale?: "en" }, {}>} */ ((inputs = {}, options = {}) => {
	experimentalStaticLocale ?? options.locale ?? getLocale()
	return __en.ui_version_list_live(inputs)
});