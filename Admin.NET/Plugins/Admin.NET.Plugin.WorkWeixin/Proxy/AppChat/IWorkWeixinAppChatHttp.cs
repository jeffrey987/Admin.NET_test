﻿// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Plugin.WorkWeixin.Proxy.AppChat;

/// <summary>
/// 群聊会话远程调用服务
/// </summary>
public interface IWorkWeixinAppChatHttp : IHttpDeclarative
{
    /// <summary>
    /// 创建群聊会话
    /// </summary>
    /// <param name="accessToken"></param>
    /// <param name="body"></param>
    /// <returns></returns>
    /// <inheritdoc cref="https://developer.work.weixin.qq.com/document/path/90245"/>
    [Post("https://qyapi.weixin.qq.com/cgi-bin/appchat/create")]
    Task<CreatAppChatOutput> Create([Query("access_token")] string accessToken, [Body] CreatAppChatInput body);

    /// <summary>
    /// 修改群聊会话
    /// </summary>
    /// <param name="accessToken"></param>
    /// <param name="body"></param>
    /// <returns></returns>
    /// <inheritdoc cref="https://developer.work.weixin.qq.com/document/path/98913"/>
    [Post("https://qyapi.weixin.qq.com/cgi-bin/appchat/update")]
    Task<CreatAppChatOutput> Update([Query("access_token")] string accessToken, [Body] UpdateAppChatInput body);

    /// <summary>
    /// 获取群聊会话
    /// </summary>
    /// <param name="accessToken"></param>
    /// <param name="chatId"></param>
    /// <returns></returns>
    /// <inheritdoc cref="https://developer.work.weixin.qq.com/document/path/98914"/>
    [Get("https://qyapi.weixin.qq.com/cgi-bin/appchat/get")]
    Task<CreatAppChatOutput> Get([Query("access_token")] string accessToken, [Query("chatid")] string chatId);

    /// <summary>
    /// 应用推送消息
    /// </summary>
    /// <param name="accessToken"></param>
    /// <param name="body"></param>
    /// <returns></returns>
    /// <inheritdoc cref="https://developer.work.weixin.qq.com/document/path/90248"/>
    [Post("https://qyapi.weixin.qq.com/cgi-bin/appchat/send")]
    Task<BaseWorkOutput> Send([Query("access_token")] string accessToken, [Body] SendBaseAppChatInput body);
}