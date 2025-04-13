﻿namespace Admin.NET.Plugin.DingTalk;

public class GetDingTalkCurrentRoleListInput
{
    /// <summary>
    /// 分页游标，从0开始。根据返回结果里的next_cursor是否为空来判断是否还有下一页，且再次调用时offset设置成next_cursor的值。
    /// </summary>
    public int? Offset { get; set; }

    /// <summary>
    /// 分页大小，最大50。
    /// </summary>
    public int? Size { get; set; }
}