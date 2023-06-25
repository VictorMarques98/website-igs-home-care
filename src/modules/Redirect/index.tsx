import {
  Box,
  Container,
  Typography,
  Button,
  Link
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { motion } from 'framer-motion';

import { simpleFadeIn } from '../../utils/motion';

import styles from './styles';

const Redirect = () => {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
      <Container
        sx={styles.content}
        maxWidth="xl"
        component={motion.div}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <iframe
          src="https://share.hsforms.com/1iGHff2pPSrqT19nzM15ENQnsl8v"
          width="100%"
          height="650px"
          title="Contact Form"
          style={{ maxWidth: '800px', borderRadius: '20px' }}
        />
      </Container>
    </Box>
  )
};

export { Redirect };