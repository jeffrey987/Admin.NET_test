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

import { TemplateTypeEnum } from './template-type-enum';
 /**
 * 新增模板输入参数
 *
 * @export
 * @interface AddTemplateInput
 */
export interface AddTemplateInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof AddTemplateInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof AddTemplateInput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof AddTemplateInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof AddTemplateInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof AddTemplateInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    updateUserName?: string | null;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof AddTemplateInput
     */
    tenantId?: number | null;

    /**
     * 备注
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    remark?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof AddTemplateInput
     */
    orderNo?: number;

    /**
     * 名称
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    name: string;

    /**
     * @type {TemplateTypeEnum}
     * @memberof AddTemplateInput
     */
    type?: TemplateTypeEnum;

    /**
     * 编码
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    code: string;

    /**
     * 分组名称
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    groupName: string;

    /**
     * 模板内容
     *
     * @type {string}
     * @memberof AddTemplateInput
     */
    content: string;
}
