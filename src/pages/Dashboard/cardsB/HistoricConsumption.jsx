import React from 'react';
import { Card, CardHeader, CardContent, Box, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '-60 min', kWh: 6, kVARh: 1 },
  { name: '-55 min', kWh: 7, kVARh: 2 },
  { name: '-50 min', kWh: 6.5, kVARh: 2.5 },
  { name: '-45 min', kWh: 6, kVARh: 2 },
  { name: '-40 min', kWh: 5.5, kVARh: 2.2 },
  { name: '-35 min', kWh: 6.5, kVARh: 1.8 },
  { name: '-30 min', kWh: 6, kVARh: 1 },
  { name: '-25 min', kWh: 5, kVARh: 3 },
  { name: '-20 min', kWh: 6.5, kVARh: 3 },
  { name: '-15 min', kWh: 6.8, kVARh: 2 },
  { name: '-10 min', kWh: 5.5, kVARh: 2.5 },
  { name: '-5 min', kWh: 6, kVARh: 2.3 },
  { name: '0 min', kWh: 7, kVARh: 3 },
];

const HistoricConsumption = () => {
  // Access the MUI theme
  const theme = useTheme();

  return (
    <Card
      sx={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader title="Historic Consumption" />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* Use theme colors for bars */}
              <Bar dataKey="kWh" fill={theme.palette.primary.main} name="KWh" />
              <Bar dataKey="kVARh" fill={theme.palette.secondary.main} name="KVAR/h" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HistoricConsumption;