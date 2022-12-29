import { ABConfiguration } from "./ABConfiguration";
import { Button } from "./Button";
import { InputConfiguration } from "./InputConfiguration";
import {useFormik} from "formik";

const handleGameConfiguration = (mechanic: IGame["gameMechanic"]) => {
  switch (mechanic.type) {
    case "ab":
      return <ABConfiguration config={mechanic.configuration} />;
    case "keyword_input":
      return <InputConfiguration config={mechanic.configuration} />;
    case "keyword_predefined":
    default:
      return <></>;
  }
};

export const GameMechanic = ({
  mechanic,
}: {
  mechanic: IGame["gameMechanic"];
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-slate-700 my-8">
        {mechanic.configuration.headline}
      </h2>
      {handleGameConfiguration(mechanic)}
      <Button
        label={mechanic.configuration.label}
        onClickHandler={() => console.log("clickedButton")}
      />
    </div>
  );
};
