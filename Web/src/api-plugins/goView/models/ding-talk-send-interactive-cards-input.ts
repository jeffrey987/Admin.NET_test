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
import { DingTalkCardData } from './ding-talk-card-data';
import { DingTalkConversationTypeEnum } from './ding-talk-conversation-type-enum';
/**
 * 
 * @export
 * @interface DingTalkSendInteractiveCardsInput
 */
export interface DingTalkSendInteractiveCardsInput {
    /**
     * 互动卡片的消息模板Id
     * @type {string}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    cardTemplateId: string;
    /**
     * 群Id
     * @type {string}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    openConversationId?: string | null;
    /**
     * 接收人userId列表
     * @type {Array<string>}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    receiverUserIdList: Array<string>;
    /**
     * 唯一标示卡片的外部编码
     * @type {string}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    outTrackId: string;
    /**
     * 机器人的编码
     * @type {string}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    robotCode?: string | null;
    /**
     * 
     * @type {DingTalkConversationTypeEnum}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    conversationType: DingTalkConversationTypeEnum;
    /**
     * 卡片回调时的路由Key，用于查询注册的callbackUrl
     * @type {string}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    callbackRouteKey?: string | null;
    /**
     * 
     * @type {DingTalkCardData}
     * @memberof DingTalkSendInteractiveCardsInput
     */
    cardData: DingTalkCardData;
}
