import React, { ReactNode } from 'react';
import { Container, Paper, Box, Typography, Divider } from '@mui/material';

interface PageLayoutProps {
  title: string;
  icon?: React.ReactNode;
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  action?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  icon,
  children,
  maxWidth = "lg",
  action
}) => {
  return (
    <Container 
      maxWidth={maxWidth} 
      sx={{ 
        py: 3, 
        px: { xs: 1, sm: 3 }, 
        height: '100%',
        width: '100%'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(18, 18, 24, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          overflow: 'auto'
        }}
      >
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="space-between" 
          mb={3}
        >
          <Box display="flex" alignItems="center">
            {icon && (
              <Box mr={2} display="flex" alignItems="center">
                {icon}
              </Box>
            )}
            <Typography variant="h4" component="h1" fontWeight="600" color="#ffffff">
              {title}
            </Typography>
          </Box>
          
          {action && (
            <Box>
              {action}
            </Box>
          )}
        </Box>
        
        <Divider sx={{ mb: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

export default PageLayout; 