import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";


const TransactionTable = () => {
  const tableData = [
    {
      id: "SDFA12334",
      date: "2024-05-01",
      time: "07:15 PM",
      type: {
        name: "PKR Deposite",
        tag: "Bank Transfer",
      },
      amount: "Rs +10,000",
      status: "Pending",
    },
    {
      id: "SDFF12334",
      date: "2024-17-01",
      time: "09:11 PM",
      type: {
        name: "PKR Deposite",
        tag: "Bank Transfer",
      },
      amount: "Rs +15,000",
      status: "Cancelled",
    },
    {
      id: "SDTT12334",
      date: "2024-25-01",
      time: "11:54 AM",
      type: {
        name: "PKR Deposite",
        tag: "Bank Transfer",
      },
      amount: "Rs +20,000",
      status: "Completed",
    },
  ];
  const statusColor = {
    Pending:"#797EB2",
    Completed:"#27AE60",
    Cancelled:"#DC2626"
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Date and Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        
        <Tbody color="black" >
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">{data.id}</Td>
              
              <Td>
                <Stack spacing="0" >
                  <Text fontSize="sm" fontWeight="medium" >{data.date}</Text>
                  <Text fontSize="xs">{data.time}</Text>
                </Stack>
              </Td>
              <Td><Stack  spacing="0">
                  <Text fontSize="sm" fontWeight="medium" >{data.type.name}</Text>
                  <Text fontSize="xs" color="black.60">{data.type.tag}</Text>
                </Stack></Td>
              <Td fontSize="sm" fontWeight="medium">{data.amount}</Td>

              <Td fontSize="sm" fontWeight="medium">
                <Tag
                bg={statusColor[data.status]}
               
                color="white"
                >
                {data.status}
                </Tag>
                </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
