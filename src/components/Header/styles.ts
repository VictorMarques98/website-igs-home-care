const appBar = {
  backgroundColor: 'transparent', 
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
};

const logo = {
  marginRight: '1rem',
  maxWidth: '4.375rem',
  // display: { xs: 'none', md: 'inline-block' },
};

const logoName = {
  mr: 2,
  fontFamily: 'monospace',
  fontWeight: 700,
  color: 'inherit',
  textDecoration: 'none',
};

const callNumber = {
  position: 'absolute',
  right: '1rem',
  fontSize: '1.1rem',
  color: 'inherit',
  display: { xs: 'none', md: 'block' },
}

const toolbar ={
  height: '90px',
  justifyContent: 'center',
};

const menuContainer = {
  flexGrow: 1, 
  display: { xs: 'flex', md: 'none' }
};

const menuWrapperMobile = {
  display: { xs: 'block', md: 'none' },
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const logoNameMobile = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none'
};

const menuWrapper = {
  flexGrow: 1, 
  display: { xs: 'none', md: 'flex' }, 
  justifyContent: 'center',
};

const menuItem = {
  my: 2,
  color: 'inherit',
  display: 'block',
  textTransform: 'inherit',
  fontSize: '1rem',
  margin: 0,
  padding: '0 1rem',
  fontWeight: 300,
  '&:hover': {
    color: '#d6d2d2',
    backgroundColor: 'transparent',
  }
};

const menuContainerMobile = {
  maxWidth: '250px',
  minWidth: '150px',
  width: '50vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '100%'
};

const listItem = {
  paddingLeft: '1.8rem',
};

const listItemText = {
  fontWeight: 600,
  fontSize: '1.2rem',
};

const styles = {
  appBar,
  logoName,
  toolbar,
  menuContainer,
  menuWrapper,
  logoNameMobile,
  menuWrapperMobile,
  menuItem,
  menuContainerMobile,
  listItem,
  listItemText,
  logo,
  callNumber
};

export default styles;