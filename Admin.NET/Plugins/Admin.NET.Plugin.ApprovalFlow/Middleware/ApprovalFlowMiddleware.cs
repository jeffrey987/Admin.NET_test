// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

using Admin.NET.Plugin.ApprovalFlow.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Admin.NET.Plugin.ApprovalFlow;

/// <summary>
/// 扩展审批流中间件
/// </summary>
public static class ApprovalFlowMiddlewareExtensions
{
    /// <summary>
    /// 使用审批流
    /// </summary>
    /// <param name="builder"></param>
    /// <returns></returns>
    public static IApplicationBuilder UseApprovalFlow(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ApprovalFlowMiddleware>();
    }
}

/// <summary>
/// 审批流中间件
/// </summary>
public class ApprovalFlowMiddleware
{
    private readonly RequestDelegate _next;
    private readonly SysApprovalService _sysApprovalService;

    public ApprovalFlowMiddleware(RequestDelegate next)
    {
        _next = next;
        _sysApprovalService = App.GetRequiredService<SysApprovalService>();
    }

    public async Task InvokeAsync(HttpContext context)
    {
        await _sysApprovalService.MatchApproval(context);

        // 调用下一个中间件
        await _next(context);
    }
}