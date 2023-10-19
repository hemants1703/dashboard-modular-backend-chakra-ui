import {
  Card,
  CardBody,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const StatCard = ({
  label = "label",
  number = "number",
  helptext = "helpText",
}) => {
  return (
    <Card>
      <CardBody>
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{number}</StatNumber>
          <StatHelpText>{helptext}</StatHelpText>
        </Stat>
      </CardBody>
    </Card>
  );
};

export default StatCard;
