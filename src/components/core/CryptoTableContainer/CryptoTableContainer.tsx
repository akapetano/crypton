import {
  Container,
  TableContainerProps,
  useColorModeValue,
} from '@chakra-ui/react';

export const CryptoTableContainer = ({ ...restProps }: TableContainerProps) => {
  const containerBorderColor = useColorModeValue('#E2E8F0', '#2D3748');

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW={[
        '25rem',
        'container.sm',
        'container.md',
        'container.lg',
        'container.xl',
      ]}
      p={5}
      border={`1px solid ${containerBorderColor}`}
      rounded="md"
      boxShadow={useColorModeValue(
        '0 1px 16px -1px rgba(0, 0, 0, .2)',
        '0 1px 16px 1px rgba(255, 255, 255, .05)'
      )}
      {...restProps}
    />
  );
};
