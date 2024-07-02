import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WasteManagementList } from "./wasteManagement/WasteManagementList";
import { WasteManagementCreate } from "./wasteManagement/WasteManagementCreate";
import { WasteManagementEdit } from "./wasteManagement/WasteManagementEdit";
import { WasteManagementShow } from "./wasteManagement/WasteManagementShow";
import { HouseholdsCharacteristicsList } from "./householdsCharacteristics/HouseholdsCharacteristicsList";
import { HouseholdsCharacteristicsCreate } from "./householdsCharacteristics/HouseholdsCharacteristicsCreate";
import { HouseholdsCharacteristicsEdit } from "./householdsCharacteristics/HouseholdsCharacteristicsEdit";
import { HouseholdsCharacteristicsShow } from "./householdsCharacteristics/HouseholdsCharacteristicsShow";
import { SalariesAndWagesList } from "./salariesAndWages/SalariesAndWagesList";
import { SalariesAndWagesCreate } from "./salariesAndWages/SalariesAndWagesCreate";
import { SalariesAndWagesEdit } from "./salariesAndWages/SalariesAndWagesEdit";
import { SalariesAndWagesShow } from "./salariesAndWages/SalariesAndWagesShow";
import { HouseCharacteristicsList } from "./houseCharacteristics/HouseCharacteristicsList";
import { HouseCharacteristicsCreate } from "./houseCharacteristics/HouseCharacteristicsCreate";
import { HouseCharacteristicsEdit } from "./houseCharacteristics/HouseCharacteristicsEdit";
import { HouseCharacteristicsShow } from "./houseCharacteristics/HouseCharacteristicsShow";
import { DemographyList } from "./demography/DemographyList";
import { DemographyCreate } from "./demography/DemographyCreate";
import { DemographyEdit } from "./demography/DemographyEdit";
import { DemographyShow } from "./demography/DemographyShow";
import { IdentificationList } from "./identification/IdentificationList";
import { IdentificationCreate } from "./identification/IdentificationCreate";
import { IdentificationEdit } from "./identification/IdentificationEdit";
import { IdentificationShow } from "./identification/IdentificationShow";
import { SourceOfIncomeList } from "./sourceOfIncome/SourceOfIncomeList";
import { SourceOfIncomeCreate } from "./sourceOfIncome/SourceOfIncomeCreate";
import { SourceOfIncomeEdit } from "./sourceOfIncome/SourceOfIncomeEdit";
import { SourceOfIncomeShow } from "./sourceOfIncome/SourceOfIncomeShow";
import { CrimeList } from "./crime/CrimeList";
import { CrimeCreate } from "./crime/CrimeCreate";
import { CrimeEdit } from "./crime/CrimeEdit";
import { CrimeShow } from "./crime/CrimeShow";
import { PoliticalParticipationList } from "./politicalParticipation/PoliticalParticipationList";
import { PoliticalParticipationCreate } from "./politicalParticipation/PoliticalParticipationCreate";
import { PoliticalParticipationEdit } from "./politicalParticipation/PoliticalParticipationEdit";
import { PoliticalParticipationShow } from "./politicalParticipation/PoliticalParticipationShow";
import { HousingList } from "./housing/HousingList";
import { HousingCreate } from "./housing/HousingCreate";
import { HousingEdit } from "./housing/HousingEdit";
import { HousingShow } from "./housing/HousingShow";
import { HealthAndOtherCharacteristicsList } from "./healthAndOtherCharacteristics/HealthAndOtherCharacteristicsList";
import { HealthAndOtherCharacteristicsCreate } from "./healthAndOtherCharacteristics/HealthAndOtherCharacteristicsCreate";
import { HealthAndOtherCharacteristicsEdit } from "./healthAndOtherCharacteristics/HealthAndOtherCharacteristicsEdit";
import { HealthAndOtherCharacteristicsShow } from "./healthAndOtherCharacteristics/HealthAndOtherCharacteristicsShow";
import { EducationAndLiteracyList } from "./educationAndLiteracy/EducationAndLiteracyList";
import { EducationAndLiteracyCreate } from "./educationAndLiteracy/EducationAndLiteracyCreate";
import { EducationAndLiteracyEdit } from "./educationAndLiteracy/EducationAndLiteracyEdit";
import { EducationAndLiteracyShow } from "./educationAndLiteracy/EducationAndLiteracyShow";
import { CropFarmingList } from "./cropFarming/CropFarmingList";
import { CropFarmingCreate } from "./cropFarming/CropFarmingCreate";
import { CropFarmingEdit } from "./cropFarming/CropFarmingEdit";
import { CropFarmingShow } from "./cropFarming/CropFarmingShow";
import { ClimateList } from "./climate/ClimateList";
import { ClimateCreate } from "./climate/ClimateCreate";
import { ClimateEdit } from "./climate/ClimateEdit";
import { ClimateShow } from "./climate/ClimateShow";
import { EconomicActivityList } from "./economicActivity/EconomicActivityList";
import { EconomicActivityCreate } from "./economicActivity/EconomicActivityCreate";
import { EconomicActivityEdit } from "./economicActivity/EconomicActivityEdit";
import { EconomicActivityShow } from "./economicActivity/EconomicActivityShow";
import { WaterAndSanitationList } from "./waterAndSanitation/WaterAndSanitationList";
import { WaterAndSanitationCreate } from "./waterAndSanitation/WaterAndSanitationCreate";
import { WaterAndSanitationEdit } from "./waterAndSanitation/WaterAndSanitationEdit";
import { WaterAndSanitationShow } from "./waterAndSanitation/WaterAndSanitationShow";
import { NutritionList } from "./nutrition/NutritionList";
import { NutritionCreate } from "./nutrition/NutritionCreate";
import { NutritionEdit } from "./nutrition/NutritionEdit";
import { NutritionShow } from "./nutrition/NutritionShow";
import { AgricultureFarmingList } from "./agricultureFarming/AgricultureFarmingList";
import { AgricultureFarmingCreate } from "./agricultureFarming/AgricultureFarmingCreate";
import { AgricultureFarmingEdit } from "./agricultureFarming/AgricultureFarmingEdit";
import { AgricultureFarmingShow } from "./agricultureFarming/AgricultureFarmingShow";
import { LivestockRaisingList } from "./livestockRaising/LivestockRaisingList";
import { LivestockRaisingCreate } from "./livestockRaising/LivestockRaisingCreate";
import { LivestockRaisingEdit } from "./livestockRaising/LivestockRaisingEdit";
import { LivestockRaisingShow } from "./livestockRaising/LivestockRaisingShow";
import { FishingList } from "./fishing/FishingList";
import { FishingCreate } from "./fishing/FishingCreate";
import { FishingEdit } from "./fishing/FishingEdit";
import { FishingShow } from "./fishing/FishingShow";
import { OtherSourceOfIncomeList } from "./otherSourceOfIncome/OtherSourceOfIncomeList";
import { OtherSourceOfIncomeCreate } from "./otherSourceOfIncome/OtherSourceOfIncomeCreate";
import { OtherSourceOfIncomeEdit } from "./otherSourceOfIncome/OtherSourceOfIncomeEdit";
import { OtherSourceOfIncomeShow } from "./otherSourceOfIncome/OtherSourceOfIncomeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CBMS Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WasteManagement"
          list={WasteManagementList}
          edit={WasteManagementEdit}
          create={WasteManagementCreate}
          show={WasteManagementShow}
        />
        <Resource
          name="HouseholdsCharacteristics"
          list={HouseholdsCharacteristicsList}
          edit={HouseholdsCharacteristicsEdit}
          create={HouseholdsCharacteristicsCreate}
          show={HouseholdsCharacteristicsShow}
        />
        <Resource
          name="SalariesAndWages"
          list={SalariesAndWagesList}
          edit={SalariesAndWagesEdit}
          create={SalariesAndWagesCreate}
          show={SalariesAndWagesShow}
        />
        <Resource
          name="HouseCharacteristics"
          list={HouseCharacteristicsList}
          edit={HouseCharacteristicsEdit}
          create={HouseCharacteristicsCreate}
          show={HouseCharacteristicsShow}
        />
        <Resource
          name="Demography"
          list={DemographyList}
          edit={DemographyEdit}
          create={DemographyCreate}
          show={DemographyShow}
        />
        <Resource
          name="Identification"
          list={IdentificationList}
          edit={IdentificationEdit}
          create={IdentificationCreate}
          show={IdentificationShow}
        />
        <Resource
          name="SourceOfIncome"
          list={SourceOfIncomeList}
          edit={SourceOfIncomeEdit}
          create={SourceOfIncomeCreate}
          show={SourceOfIncomeShow}
        />
        <Resource
          name="Crime"
          list={CrimeList}
          edit={CrimeEdit}
          create={CrimeCreate}
          show={CrimeShow}
        />
        <Resource
          name="PoliticalParticipation"
          list={PoliticalParticipationList}
          edit={PoliticalParticipationEdit}
          create={PoliticalParticipationCreate}
          show={PoliticalParticipationShow}
        />
        <Resource
          name="Housing"
          list={HousingList}
          edit={HousingEdit}
          create={HousingCreate}
          show={HousingShow}
        />
        <Resource
          name="HealthAndOtherCharacteristics"
          list={HealthAndOtherCharacteristicsList}
          edit={HealthAndOtherCharacteristicsEdit}
          create={HealthAndOtherCharacteristicsCreate}
          show={HealthAndOtherCharacteristicsShow}
        />
        <Resource
          name="EducationAndLiteracy"
          list={EducationAndLiteracyList}
          edit={EducationAndLiteracyEdit}
          create={EducationAndLiteracyCreate}
          show={EducationAndLiteracyShow}
        />
        <Resource
          name="CropFarming"
          list={CropFarmingList}
          edit={CropFarmingEdit}
          create={CropFarmingCreate}
          show={CropFarmingShow}
        />
        <Resource
          name="Climate"
          list={ClimateList}
          edit={ClimateEdit}
          create={ClimateCreate}
          show={ClimateShow}
        />
        <Resource
          name="EconomicActivity"
          list={EconomicActivityList}
          edit={EconomicActivityEdit}
          create={EconomicActivityCreate}
          show={EconomicActivityShow}
        />
        <Resource
          name="WaterAndSanitation"
          list={WaterAndSanitationList}
          edit={WaterAndSanitationEdit}
          create={WaterAndSanitationCreate}
          show={WaterAndSanitationShow}
        />
        <Resource
          name="Nutrition"
          list={NutritionList}
          edit={NutritionEdit}
          create={NutritionCreate}
          show={NutritionShow}
        />
        <Resource
          name="AgricultureFarming"
          list={AgricultureFarmingList}
          edit={AgricultureFarmingEdit}
          create={AgricultureFarmingCreate}
          show={AgricultureFarmingShow}
        />
        <Resource
          name="LivestockRaising"
          list={LivestockRaisingList}
          edit={LivestockRaisingEdit}
          create={LivestockRaisingCreate}
          show={LivestockRaisingShow}
        />
        <Resource
          name="Fishing"
          list={FishingList}
          edit={FishingEdit}
          create={FishingCreate}
          show={FishingShow}
        />
        <Resource
          name="OtherSourceOfIncome"
          list={OtherSourceOfIncomeList}
          edit={OtherSourceOfIncomeEdit}
          create={OtherSourceOfIncomeCreate}
          show={OtherSourceOfIncomeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
