import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
   
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Heading,
    VStack,
    
   
    
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
   
    
  } from '@chakra-ui/icons';
  import { Navigate,useNavigate,Link} from 'react-router-dom';
  import { useContext,useRef } from 'react';
  import { Context } from '../Components/Contextapi';
  import {  BsFillCartCheckFill } from "react-icons/bs";

  
  
  
  
  
  export default function WithSubnavigation() {
    //const ref=useRef()
    const {Auth,setAuth}=useContext(Context)
    const { isOpen, onToggle } = useDisclosure();
   
   

  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to='/' href={'/'}>
            
            <VStack borderRadius={'10'} spacing={'0'} border={"1px dotted gold"} w={"150px"} bg={"gray.200"}>
            <Heading
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              
              fontFamily={"serif"}
              
              
              color={useColorModeValue('black', 'white')}>
              Fusion
            </Heading>
            <Heading
              textAlign={useBreakpointValue({ base: 'right', md: 'left' })}
              fontSize={"20"}
              fontFamily={"serif"}
              bg={"gold.100"}
              
              color={useColorModeValue('black', 'white')}>
              Market
            </Heading>
            
            </VStack>
           
            </Link>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Link to='/cart'>
            <Button 
              to={"/cart"}
              display={{ base: 'none', md: 'inline-flex' }}
              w={"40px"}
              textAlign={"center"}
              
              align={"center"}
              justifyContent={"center"}
              margin={"auto"}
              p={"2.5"}
              borderRadius={'10'}
              fontSize={'20'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'/cart'}
              _hover={{
                bg: 'teal',
              }}>
             <BsFillCartCheckFill/>
            </Button>
            </Link>
            
           <Link to='/login'>
            <Button 
            
            to={'/login'}
           
           
            
           
            display={{ base: 'none', md: 'inline-flex' }}
            w={"80px"}
            textAlign={"center"}
            
            align={"center"}
            justifyContent={"center"}
            margin={"auto"}
            p={"2.5"}
            borderRadius={'10'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'/login'}
            _hover={{
              bg: 'pink.300',
            }}>
            {Auth?"Logged":"Sign In"}
          </Button>
          </Link>
         
          <Link to='/admin'>
          <Button 
            
          to={'/admin'}
         
         
          
         
          display={{ base: 'none', md: 'inline-flex' }}
          w={"80px"}
          textAlign={"center"}
          
          align={"center"}
          justifyContent={"center"}
          margin={"auto"}
          p={"2.5"}
          borderRadius={'10'}
          fontSize={'sm'}
          fontWeight={600}
          color={'black'}
          bg={'gold'}
          href={'/admin'}
          _hover={{
            bg: 'teal',
          }}>
          ADMIN
        </Button>
        </Link>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {<Text fontWeight={'500'}>{navItem.label}</Text>}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'MEN',
      children: [
        {
          label: 'Mens Clothing',
          subLabel: 'Trending Design to inspire you',
          href: '/men',
        },
        {
          label: 'Bagpack',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
        {
            label: 'Sunglasses',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Accessories',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
      ],
    },
    {
      label: 'WOMEN',
      children: [
        {
          label: 'Women Clothing',
          subLabel: 'Find your dream design ',
          href: '/women',
        },
        {
          label: 'Sunglasses',
          subLabel: 'An exclusive Products for you',
          href: '#',
        },
        {
            label: 'Diamond Jewllary',
            subLabel: 'An exclusive Products for you',
            href: '#',
          },
          {
            label: 'Footwear',
            subLabel: 'An exclusive Products for you',
            href: '#',
          },
      ],
    },
    {
        label: 'KIDS',
        children: [
          {
            label: 'Kids Clothing',
            subLabel: 'Find your dream design ',
            href: '/kids',
          },
          {
            label: 'Boys Denim',
            subLabel: 'An exclusive Products for you',
            href: '#',
          },
        ],
      },
    // {
    //   label: 'KID',
    //   href: '#',
    // },
    // {
    //   label: 'Hire Designers',
    //   href: '#',
    // },
  ];

  