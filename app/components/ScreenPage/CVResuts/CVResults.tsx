import { Table, Group, Text } from '@mantine/core';

interface CVResultsProps {
  data: { [key: string]: number };
}

export function CVResults({ data }: CVResultsProps) {
  const rows = Object.entries(data).map(([fileName, score]) => (
    <Table.Tr key={fileName}>
      <Table.Td>
        <Group gap="sm">
          <div>
            <Text fz="sm" fw={500}>
              {fileName}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Group gap="sm">
          <div>
            <Text fz="sm" fw={500}>
              {score.toFixed(2)}
            </Text>
          </div>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>File name</Table.Th>
            <Table.Th>Score</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}