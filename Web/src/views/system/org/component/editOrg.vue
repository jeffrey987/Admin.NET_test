<template>
	<div class="sys-org-container">
		<el-dialog v-model="state.isShowDialog" draggable :close-on-click-modal="false" width="700px">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span> {{ props.title }} </span>
				</div>
			</template>
			<el-form :model="state.ruleForm" ref="ruleFormRef" label-width="auto">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="上级机构">
							<el-cascader :options="state.orgData" :props="cascaderProps" placeholder="请选择上级机构" clearable filterable class="w100" v-model="state.ruleForm.pid">
								<template #default="{ node, data }">
									<span>{{ data.name }}</span>
									<span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
								</template>
							</el-cascader>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="机构名称" prop="name" :rules="[{ required: true, message: '机构名称不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.name" placeholder="机构名称" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="机构编码" prop="code" :rules="[{ required: true, message: '机构编码不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.code" placeholder="机构编码" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="级别">
							<el-input-number v-model="state.ruleForm.level" placeholder="级别" class="w100" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="机构类型">
              <g-sys-dict v-model="state.ruleForm.type" code="org_type" render-as="select" class="w100" filterable clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="排序">
							<el-input-number v-model="state.ruleForm.orderNo" placeholder="排序" class="w100" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态">
							<el-radio-group v-model="state.ruleForm.status">
								<el-radio :value="1">启用</el-radio>
								<el-radio :value="2">禁用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="备注">
							<el-input v-model="state.ruleForm.remark" placeholder="请输入备注内容" clearable type="textarea" />
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="submit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup name="sysEditOrg">
import { reactive, ref } from 'vue';
import { getAPI } from '/@/utils/axios-utils';
import { SysOrgApi } from '/@/api-services/api';
import { SysOrg, UpdateOrgInput } from '/@/api-services/models';

const props = defineProps({
	title: String,
	orgData: Array<SysOrg>,
});
const emits = defineEmits(['reload']);
const ruleFormRef = ref();
const state = reactive({
	isShowDialog: false,
	orgData: [] as Array<SysOrg>,
	ruleForm: {} as UpdateOrgInput,
	orgTypeList: [] as any,
});
// 级联选择器配置选项
const cascaderProps = { checkStrictly: true, emitPath: false, value: 'id', label: 'name' };

// 打开弹窗
const openDialog = (row: any) => {
	state.orgData = (row?.tenantId ? props.orgData?.filter((e) => e.tenantId === row.tenantId) : props.orgData) ?? [];
	state.ruleForm = JSON.parse(JSON.stringify(row));
	state.isShowDialog = true;
	ruleFormRef.value?.resetFields();
};

// 关闭弹窗
const closeDialog = () => {
	emits('reload', true);
	state.isShowDialog = false;
};

// 取消
const cancel = () => {
	state.isShowDialog = false;
};

// 提交
const submit = () => {
	ruleFormRef.value.validate(async (valid: boolean) => {
		if (!valid) return;
		if (state.ruleForm.id != undefined && state.ruleForm.id > 0) {
			await getAPI(SysOrgApi).apiSysOrgUpdatePost(state.ruleForm);
		} else {
			await getAPI(SysOrgApi).apiSysOrgAddPost(state.ruleForm);
		}
		closeDialog();
	});
};

// 导出对象
defineExpose({ openDialog });
</script>
