/* tslint:disable */
/* eslint-disable */
/**
 * ApprovalFlow
 * <br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 审批流输出参数
 * @export
 * @interface ApprovalFlowOutput
 */
export interface ApprovalFlowOutput {
    /**
     * 主键Id
     * @type {number}
     * @memberof ApprovalFlowOutput
     */
    id?: number;
    /**
     * 编号
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    code?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    name?: string | null;
    /**
     * 表单
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    formJson?: string | null;
    /**
     * 流程
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    flowJson?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    remark?: string | null;
    /**
     * 创建时间
     * @type {Date}
     * @memberof ApprovalFlowOutput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof ApprovalFlowOutput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof ApprovalFlowOutput
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof ApprovalFlowOutput
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    updateUserName?: string | null;
    /**
     * 创建者部门Id
     * @type {number}
     * @memberof ApprovalFlowOutput
     */
    createOrgId?: number | null;
    /**
     * 创建者部门名称
     * @type {string}
     * @memberof ApprovalFlowOutput
     */
    createOrgName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof ApprovalFlowOutput
     */
    isDelete?: boolean;
}
