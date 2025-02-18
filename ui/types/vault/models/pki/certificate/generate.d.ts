import { FormField, FormFieldGroups } from 'vault/app-types';
import PkiCertificateBaseModel from './base';

export default class PkiCertificateGenerateModel extends PkiCertificateBaseModel {
  role: string;
  formFields: FormField[];
  formFieldGroups: FormFieldGroups;
}
