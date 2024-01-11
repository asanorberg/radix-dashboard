import Cards from "./Cards";
import Overview from "./Overview";
import RecentSales from "./RecentSales";

import {
  Flex,
  Tabs,
  Heading,
  Popover,
  Button,
  Text,
  Box,
  TextArea,
  Checkbox,
} from "@radix-ui/themes";
import { CalendarIcon, DownloadIcon } from "@radix-ui/react-icons";

const header = (
  <div className="">
    <Flex justify="between" className="items-center">
      <Heading size="8" align="left">
        Dashboard
      </Heading>
      <div className="hidden md:flex items-center space-x-2">
        <button class="inline-flex gap-2 items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[260px] justify-start text-left font-normal">
          <CalendarIcon height="16" width="16" /> Jan 20, 2024 - Feb 20, 2024
        </button>

        <div>
          <Popover.Root>
            <Popover.Trigger>
              <Button className="bg-black text-white" variant="soft">
                Download
              </Button>
            </Popover.Trigger>
            <Popover.Content className="bg-white" style={{ width: 360 }}>
              <Flex gap="3">
                <Box grow="1" className="bg-white">
                  <TextArea
                    placeholder="Comment this download…"
                    style={{ height: 80 }}
                  />
                  <Flex gap="3" mt="3" justify="between">
                    <Flex align="center" gap="2" asChild>
                      <Text as="label" size="2">
                        <Text>Export as pdf</Text>
                        <Checkbox />
                      </Text>
                    </Flex>

                    <Popover.Close>
                      <Button className="bg-black" size="1">
                        Download
                      </Button>
                    </Popover.Close>
                  </Flex>
                </Box>
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>
    </Flex>
  </div>
);

function TabRow() {
  return (
    <>
      <Flex>
        <Tabs.Root defaultValue="account">
          <Tabs.List
            underline="none"
            className=" inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 text-muted-foreground "
          >
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
            <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
            <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Flex>
    </>
  );
}

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6 justify-center">
      {header}
      <TabRow />
      <Cards />

      <div className="flex-col pb-4  lg:grid sm:flex- gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview />
        <RecentSales />
      </div>
    </div>
  );
}
