/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { StatusEnum } from './status-enum';
 /**
 * 
 *
 * @export
 * @interface UpdatePluginInput
 */
export interface UpdatePluginInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdatePluginInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdatePluginInput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdatePluginInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdatePluginInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdatePluginInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    updateUserName?: string | null;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof UpdatePluginInput
     */
    tenantId?: number | null;

    /**
     * C#代码
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    csharpCode: string;

    /**
     * 程序集名称
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    assemblyName?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdatePluginInput
     */
    orderNo?: number;

    /**
     * @type {StatusEnum}
     * @memberof UpdatePluginInput
     */
    status?: StatusEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    remark?: string | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdatePluginInput
     */
    name: string;
}
