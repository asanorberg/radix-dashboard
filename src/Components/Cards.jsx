import { Flex, Heading, Text, Card, Box } from "@radix-ui/themes";

function CardRow() {
  return (
    // <div className="">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
      <Card
        style={{ minWidth: 240 }}
        className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 shadow"
      >
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="regular">
              Total Revenue
            </Text>
            <Heading>$45,231.89</Heading>

            <Text as="div" size="1" color="gray">
              +20.1% from last month
            </Text>
          </Box>
        </Flex>
      </Card>

      <Card
        style={{ minWidth: 240 }}
        className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 shadow"
      >
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="regular">
              Subscriptions
            </Text>
            <Heading>+2350</Heading>

            <Text as="div" size="1" color="gray">
              +180.1% from last month
            </Text>
          </Box>
        </Flex>
      </Card>

      <Card
        style={{ minWidth: 240 }}
        className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 shadow"
      >
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="regular">
              Sales{" "}
            </Text>
            <Heading>+12,234</Heading>

            <Text as="div" size="1" color="gray">
              +19% from last month
            </Text>
          </Box>
        </Flex>
      </Card>

      <Card
        style={{ minWidth: 240 }}
        className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 shadow"
      >
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="regular">
              Active Now
            </Text>
            <Heading>+573</Heading>

            <Text as="div" size="1" color="gray">
              +201 since last hour
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
    // </div>
  );
}

export default function Cards() {
  return (
    <Flex>
      <CardRow />
    </Flex>
  );
}
