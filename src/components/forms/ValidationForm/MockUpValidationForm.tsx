import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseSlider } from '@app/components/common/BaseSlider/BaseSlider';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { notificationController } from '@app/controllers/notificationController';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { BaseInput } from "@app/components/common/inputs/BaseInput/BaseInput";
import { modelArray } from "@app/array/array";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const MockUpValidationForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const [formValue] = useState(null);

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  const [form] = BaseButtonsForm.useForm();

  return (
    <BaseButtonsForm
      {...formItemLayout}
      form={form}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => {
        setFieldsChanged(true)
      }}
      name="validateForm"
      footer={
        <BaseButtonsForm.Item>
          {/*<BaseButton type="primary" htmlType="submit" loading={isLoading}>*/}
          <BaseButton type="primary" htmlType="submit" >
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
      initialValues={{
        model: 'dall_e_3',           // 모델 선택의 초기값
        prompt: '기본 프롬프트',      // 프롬프트 기본값
        negtv_prompt: '기본 네거티브 프롬프트',
        rate: '16_9',                // 비율 초기값
        size: '1024x1024',           // 이미지 사이즈 초기값
        foregroud_rate: 50,          // 슬라이더 기본값 (0-100)
        origin_rate: 60,             // 슬라이더 기본값 (0-100)
        stlye: 'vivid',              // 스타일 선택
        quality: 'hd',               // 품질 선택
      }}
    >
      <BaseButtonsForm.Item
        name="model"
        label={'Model'}
      >
        <BaseSelect placeholder={'모델을 선택해주세요.'}>
          {modelArray.map((model) => {
            return (
              <Option key={model} value={model}>
                {t(`prompt.model.${model}`)}
              </Option>
            );
          })}
        </BaseSelect>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="prompt"
        label={'Prompt'}
      >
        <BaseInput.TextArea placeholder={'프롬프트를 입력해주세요.'} />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="negtv_prompt"
        label={'Negative-Prompt'}
      >
        <BaseInput.TextArea placeholder={'영어로 입력해주세요.'} />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="rate"
        label={'비율'}
      >
        <BaseSelect placeholder={'모델을 선택해주세요.'}>
          <Option value="1_1">{'1:1'}</Option>
          <Option value="16_9">{'16:9'}</Option>
          <Option value="4_5">{'4:5'}</Option>
          <Option value="5_4">{'5:4'}</Option>
          <Option value="9_16">{'9:16'}</Option>
        </BaseSelect>
      </BaseButtonsForm.Item>


      <BaseButtonsForm.Item
        name="size"
        label={'Size'}
        hasFeedback
      >
        <BaseSelect placeholder={'이미지 사이즈를 선택해주세요.'}>
          <Option value="1024x1024">{'1024x1024'}</Option>
          <Option value="1792x1024">{'1792x1024'}</Option>
          <Option value="1024x1792">{'1024x1792'}</Option>
        </BaseSelect>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="foregroud_rate" label={'포그라운드 비율 (기본값 0.85)'}>
        <BaseSlider
          tooltip={{ open: false }}
          marks={{
            0: '0',
            100: '1',
          }}
        />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="origin_rate" label={'포그라운드 비율 (기본값 1.8)'}>
        <BaseSlider
          tooltip={{ open: false }}
          marks={{
            0: '0',
            100: '10',
          }}
        />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="stlye"
        label={'스타일'}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="vivid">{'vivid'} </BaseRadio.Button>
          <BaseRadio.Button value="natural">{'natural'}</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="quality"
        label={'품질'}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="standard">{'standard'} </BaseRadio.Button>
          <BaseRadio.Button value="hd">{'hd'}</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>
    </BaseButtonsForm>
  );
};
