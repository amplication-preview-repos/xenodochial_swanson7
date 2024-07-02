import { WasteManagementWhereInput } from "./WasteManagementWhereInput";
import { WasteManagementOrderByInput } from "./WasteManagementOrderByInput";

export type WasteManagementFindManyArgs = {
  where?: WasteManagementWhereInput;
  orderBy?: Array<WasteManagementOrderByInput>;
  skip?: number;
  take?: number;
};
