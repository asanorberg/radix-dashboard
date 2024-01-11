import { Flex, Heading, Text, Card, Box, Avatar } from "@radix-ui/themes";

const profiles = [
  {
    avatar: (
      <Avatar
        radius="full"
        fallback="AK"
        size="3"
        src="https://ui.shadcn.com/avatars/01.png"
      />
    ),

    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    revenue: "+$1,999.00",
  },
  {
    avatar: (
      <Avatar
        radius="full"
        fallback="AK"
        size="3"
        src="https://ui.shadcn.com/avatars/02.png"
      />
    ),
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    revenue: "+$39.00",
  },
  {
    avatar: (
      <Avatar
        radius="full"
        fallback="AK"
        size="3"
        src="https://ui.shadcn.com/avatars/03.png"
      />
    ),
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    revenue: "+$299.00    ",
  },
  {
    avatar: (
      <Avatar
        radius="full"
        fallback="AK"
        size="3"
        src="https://ui.shadcn.com/avatars/04.png"
      />
    ),
    name: "William Kim",
    email: "will@email.com",
    revenue: "+$99.00    ",
  },
  {
    avatar: (
      <Avatar
        radius="full"
        fallback="AK"
        size="3"
        src="https://ui.shadcn.com/avatars/05.png"
      />
    ),
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    revenue: "+$39.00",
  },
];

export default function RecentSales() {
  return (
    <Card className="md:col-span-3 p-6   items-center justify-between pb-2 shadow   ">
      <div className="flex flex-col space-y-1.5  ">
        <Heading size="3" align="left">
          Recent Sales
        </Heading>
        <Text as="div" size="1" weight="thin" color="gray">
          You made 265 sales this month.
        </Text>
      </div>
      <ul>
        {profiles.map((profile, i) => (
          <li key={i}>
            <Box className="flex justify-between items-center space-y-8">
              <div className="flex space-x-2 mt-6">
                <Text as="div" size="3" weight="regular">
                  {profile.avatar}
                </Text>

                <div className="ml-4 space-y-1">
                  <Text as="div" size="2" weight="bold">
                    {profile.name}
                  </Text>
                  <Text as="div" size="1" color="gray">
                    {profile.email}
                  </Text>
                </div>
              </div>
              <Text as="div" size="3" weight="medium">
                {profile.revenue}
              </Text>
            </Box>
          </li>
        ))}
      </ul>
    </Card>
  );
}
