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

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      name="validateForm"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={
        <BaseButtonsForm.Item>
          {/*<BaseButton type="primary" htmlType="submit" loading={isLoading}>*/}
          <BaseButton type="primary" htmlType="submit" >
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
    >
      <BaseButtonsForm.Item
        name="model"
        label={'Model'}
      >
        <BaseSelect placeholder={'모델을 선택해주세요.'}>
          <Option value="dall_e_3">{'Dall-e-3'}</Option>
          <Option value="dall_e_2">{'Dall-e-2'}</Option>
          <Option value="sd_img_core">{'SD Image Core (3 credits)'}</Option>
          <Option value="sd3_medium">{'SD3 Medium (3.5 credits)'}</Option>
          <Option value="sd3_large">{'SD3 Large (6.5 credits)'}</Option>
          <Option value="sd3_large_turbo">{'SD3 Large Turbo (4 credits)'}</Option>
          <Option value="stable_fast_3d">{'Stable Fast 3D (2 credits)'}</Option>
          <Option value="stable_video_diffusion">{'Stable Video Diffusion (3 credits)'}</Option>
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

      <BaseButtonsForm.Item name="slider" label={t('forms.validationFormLabels.slider')}>
        <BaseSlider
          tooltip={{ open: false }}
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </BaseButtonsForm.Item>
      <BaseButtonsForm.Item
        name="radio-button"
        label={'스타일'}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="vivid">{'vivid'} </BaseRadio.Button>
          <BaseRadio.Button value="natural">{'natural'}</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>
      <BaseButtonsForm.Item
        name="radio-button"
        label={'품질'}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="standard">{'standard'} </BaseRadio.Button>
          <BaseRadio.Button value="hd">{'hd'}</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>

      {/*<BaseButtonsForm.Item label={t('forms.validationFormLabels.inputNumber')}>*/}
      {/*  <label>*/}
      {/*    <BaseButtonsForm.Item name="input-number" noStyle>*/}
      {/*      <InputNumber min={1} max={10} />*/}
      {/*    </BaseButtonsForm.Item>*/}
      {/*  </label>*/}
      {/*  <span> {t('forms.validationFormLabels.machines')}</span>*/}
      {/*</BaseButtonsForm.Item>*/}

      {/*<BaseButtonsForm.Item name="switch" label={t('forms.validationFormLabels.switch')} valuePropName="checked">*/}
      {/*  <BaseSwitch />*/}
      {/*</BaseButtonsForm.Item>*/}


      {/*<BaseButtonsForm.Item name="radio-group" label={t('forms.validationFormLabels.radioGroup')}>*/}
      {/*  <BaseRadio.Group>*/}
      {/*    <BaseRadio value="a">{t('forms.validationFormLabels.item')} 1</BaseRadio>*/}
      {/*    <BaseRadio value="b">{t('forms.validationFormLabels.item')} 2</BaseRadio>*/}
      {/*    <BaseRadio value="c">{t('forms.validationFormLabels.item')} 3</BaseRadio>*/}
      {/*  </BaseRadio.Group>*/}
      {/*</BaseButtonsForm.Item>*/}



    </BaseButtonsForm>
  );
};
