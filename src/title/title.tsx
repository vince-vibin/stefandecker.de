import { Title, Text } from '@mantine/core';

export function TitleComponent() {
  return <>
    <div style={{ textAlign: 'left', marginBottom: 24 }}>
        <Title order={1} size="5rem" mb="xs">
            Stefan Decker
        </Title>
        <Text>
            Portfolio Demo
        </Text>
    </div>
  </> 
}