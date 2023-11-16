import React, { useContext } from 'react'
import LeftMenu from './LeftMenu'
import Navbar from './Navbar'
import '../styles/components/my-profile.sass'
import { Context } from '../context/AuthContext'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { HiOutlinePencilSquare } from 'react-icons/hi2'

function MyProfilePage() {
  const { actualUser } = useContext(Context)

  const calcFontSize = () => {
    const fontSize = Math.max(15, Math.min(25, 35 - actualUser.name.length));
    return fontSize;
  };

  return (
    <>
      <LeftMenu />
      <Navbar />
      <div style={{ marginTop: '8vh', marginLeft: '15vw' }} className='section-list-user'>
        <div className="card-left-user card-user">
          <div className="user-img">
            <img className='img-user-my-profile' src={actualUser.img_user} alt="" />
          </div>
          <div className={'name-user'} style={{ fontSize: calcFontSize() }}>
            {actualUser.name.charAt(0).toUpperCase() + actualUser.name.slice(1)}
          </div>
          <div className="email-user">
            {actualUser.email}
          </div>
          <div className="position-user">
            {actualUser.cargo}
          </div>
        </div>
        <div className="card-right-user card-user">
          <List sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ListItem
              style={{ flex: 1, alignItems: 'center' }}
              alignItems="flex-start">
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Full Name
                    </Typography>
                    {': ' + actualUser.name.charAt(0).toUpperCase() + actualUser.name.slice(1)} <HiOutlinePencilSquare style={{marginTop: -3}} className='pencil' onClick={()=>{}} />
                  </>
                }
              />
            </ListItem>
            <Divider variant='middle' component="li" />
            <ListItem
              style={{ flex: 1, alignItems: 'center' }}
              alignItems="flex-start">

              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      E-mail
                    </Typography>
                    {': ' + actualUser.email} <HiOutlinePencilSquare style={{marginTop: -3}} className='pencil' onClick={()=>{}}/>
                  </>
                }
              />
            </ListItem>
            <Divider variant='middle' component="li" />
            <ListItem
              style={{ flex: 1, alignItems: 'center' }}
              alignItems="flex-start">
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Password:
                    </Typography>
                    {': *******'} <HiOutlinePencilSquare style={{marginTop: -3}} className='pencil' onClick={()=>{}}/>
                  </>
                }
              />
            </ListItem>
            <Divider variant='middle' component="li" />
            <ListItem
              style={{ flex: 1, alignItems: 'center' }}
              alignItems="flex-start">
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Phone
                    </Typography>
                    {': +55 (11) 99999-9999'} <HiOutlinePencilSquare style={{marginTop: -3}} className='pencil' onClick={()=>{}}/>
                  </>
                }
              />
            </ListItem>
            <Divider variant='middle' component="li" />
            <ListItem
              style={{ flex: 1, alignItems: 'center' }}
              alignItems="flex-start">
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Address
                    </Typography>
                    {': Av. Paulista, 102'} <HiOutlinePencilSquare style={{marginTop: -3}} className='pencil' onClick={()=>{}}/>
                  </>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  )
}

export default MyProfilePage