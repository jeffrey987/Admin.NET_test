/* tslint:disable */
/* eslint-disable */
/**
 * DingTalk
 * 集成钉钉开放平台<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FieldValueDomain } from './field-value-domain';
/**
 * 
 * @export
 * @interface FieldDataDomain
 */
export interface FieldDataDomain {
    /**
     * 字段标识
     * @type {string}
     * @memberof FieldDataDomain
     */
    fieldCode?: string | null;
    /**
     * 字段名称
     * @type {string}
     * @memberof FieldDataDomain
     */
    fieldName?: string | null;
    /**
     * 分组标识
     * @type {string}
     * @memberof FieldDataDomain
     */
    groupId?: string | null;
    /**
     * 字段值列表
     * @type {Array<FieldValueDomain>}
     * @memberof FieldDataDomain
     */
    fieldValueList?: Array<FieldValueDomain> | null;
}
