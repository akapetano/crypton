import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useCrypto } from '../../../../../hooks/useCrypto';
import Image from 'next/image';
import { Coin } from '../../../../../types/crypto';

export const TopTenCryptoTable = () => {
  const { data: cryptocurrencies, error } = useCrypto();

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Logo</Th>
          <Th>Name</Th>
          <Th>Symbol</Th>
          <Th>Price</Th>
          <Th>24h</Th>
          <Th>Volume</Th>
          <Th>Market Cap</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cryptocurrencies?.slice(0, 10).map((coin: Coin, index: string) => {
          return (
            <Tr key={coin.id}>
              <Td>{index + 1}</Td>
              <Td>
                <Image
                  loader={() => coin.image}
                  src={coin.image}
                  alt={coin.name}
                  height="30px"
                  width="30px"
                  unoptimized
                />
              </Td>
              <Td>{coin.name}</Td>
              <Td>{coin.symbol.toUpperCase()}</Td>
              <Td>
                $
                {coin.current_price > 1
                  ? coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 6,
                      maximumFractionDigits: 6,
                    })}
              </Td>
              <Td
                color={
                  coin.price_change_percentage_24h > 0 ? '#60AD65' : '#E53E3E'
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </Td>
              <Td>${coin.total_volume.toLocaleString()}</Td>
              <Td>${coin.market_cap.toLocaleString()}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};