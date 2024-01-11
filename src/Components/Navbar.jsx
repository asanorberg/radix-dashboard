import {
  Flex,
  Avatar,
  Text,
  Button,
  Link,
  Separator,
  DropdownMenu,
  TextField,
} from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  CaretSortIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

const AvatarSmall = (
  <Avatar
    className="grayscale"
    radius="full"
    fallback="A"
    size="1"
    src="https://avatar.vercel.sh/personal.png"
  />
);
const AvatarBig = (
  <Avatar
    radius="full"
    fallback="AK"
    size="2"
    src="https://ui.shadcn.com/avatars/01.png"
  />
);

function Navleft() {
  return (
    <>
      <Flex gap="3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button className="text-black border border-black py-2">
              {AvatarSmall}
              Alicia Koch
              <CaretSortIcon width="12" height="12" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Flex direction="column" gap="2">
              <TextField.Root className="border-b">
                <TextField.Slot className="bg-white ">
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  className="bg-white active:none "
                  variant="soft"
                  placeholder="Search teams…"
                />
              </TextField.Root>

              <Text size="1">Personal Account</Text>
              <DropdownMenu.Item> {AvatarSmall} Alicia Koch</DropdownMenu.Item>
              <Text size="1">Teams</Text>
              <DropdownMenu.Item>{AvatarSmall} Acme Inc.</DropdownMenu.Item>
              <DropdownMenu.Item className="border-b pb-4">
                {" "}
                {AvatarSmall}
                Monsters Inc.
              </DropdownMenu.Item>
              {/* <DropdownMenu.Separator /> */}
              <DropdownMenu.Item>
                <PlusCircledIcon width="22" height="22" />
                Create team
              </DropdownMenu.Item>
            </Flex>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <div className="hidden sm:flex ">{MenuLinks}</div>
      </Flex>
    </>
  );
}

const MenuLinks = (
  <>
    <Flex gap="5" align="center">
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Overview</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Customers</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Products</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Settings</Text>
      </Link>
    </Flex>
  </>
);

function Navright() {
  return (
    <>
      <div className="hidden md:flex">
        <TextField.Input variant="classic" placeholder="Search..." />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button radius="full" size="0" style={{ marginLeft: 16 }}>
              {AvatarBig}
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content side="left">
            <Flex direction="column" gap="2">
              <Flex direction="column" gap="2">
                <Text size="2" weight="bold">
                  shadcn
                </Text>
                <Text size="1" weight="thin">
                  m@example.com
                </Text>
                <Separator orientation="horizontal" size="4" />
              </Flex>
              <DropdownMenu.Item shortcut="⇧⌘P">Profile</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ B">Billing</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ S">Settings</DropdownMenu.Item>
              <DropdownMenu.Item>New Team </DropdownMenu.Item>
              <Separator orientation="horizontal" size="4" />
              <DropdownMenu.Item shortcut="⇧⌘Q">Log Out</DropdownMenu.Item>
            </Flex>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex justify-between w-full">
          <Navleft />
          <Navright />
        </div>
      </div>
    </div>
  );
}
