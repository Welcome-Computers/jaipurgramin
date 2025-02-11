export interface ApiSearchSignedDocParams {
  query: string | null;
  limit: number;
  page: number;
  sort_by: string | null;
  sort: string | null;
  document_id: number | null;
}
export interface ApiSearchWithoutSignedDocParams {
  query: string | null;
  limit: number;
  page: number;
}

export interface muCardProps {
  password_protect_details: never[];
  subscribed_extension_details: never[];
  extension_data: never[];
  get_password_protection_details: never[];
}
export interface pagingProps {
  current_page: number;
  limit: number;
  next_page: number;
  total_count: number;
  total_pages: number;
}
export const defaultPagination: pagingProps = {
  current_page: 1,
  next_page: 0,
  total_count: 0,
  total_pages: 0,
  limit: 10,
};

export type SignatureFlowPopups =
  | 'new_plan'
  | 'thinking_downgrading'
  | 'add_new_or_buy'
  | 'password_protection'
  | 'flexi_sign_card'
  | 'stay_with_current'
  | 'payment_method'
  | 'payment_unsuccess'
  | 'delinquent_info'
  | 'update_payment_method'
  | 'with_separate_payment_method'
  | 'only_payment_method';
