import { Component } from 'react';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import DrawerComp from '../drawerComponent';

import './index.css';

class Navbar extends Component {
    state = { activeTab: 'home', view: false }

    tabChange = (event, tab) => {
        console.log(tab);
        this.setState({ activeTab: tab });
    }

    drawerIconEvent = () => {
        const { view } = this.state;
        console.log(view,'view in navbar')
        this.setState({ view: !view });
    }

    closeDrawer = () => {
        this.setState({ view: false });
    }

    render() {
        const { activeTab, view } = this.state;

        return (
            <>
            <div className='container-large'>
                <AppBar sx={{ background: '#2C2C2A' }} >
                    <Toolbar sx={{ padding: '0' }}>
                        <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1711524087/logo_v2_lun5cz.png" className="navbar-logo" />
                        <Tabs
                            sx={{
                                marginLeft: 'auto',
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#00ab41', 
                                },
                            }}
                            value={activeTab}
                            onChange={this.tabChange}
                            indicatorColor="secondary"
                        >
                            <Tab label='Home' style={{ color: activeTab === 'home' ? '#00ab41' : 'white' }} href="#home" value={'home'} />
                            <Tab label="Organization" style={{ color: activeTab === 'organization' ? '#00ab41' : 'white' }} value={'organization'} href="#crypto"/>
                            <Tab label="Assets" style={{ color: activeTab === 'assets' ? '#00ab41' : 'white' }} value={'assets'}  href="#wallet"/>
                            <Tab label="Trade" style={{ color: activeTab === 'trade' ? '#00ab41' : 'white' }} value={'trade'} href='#bitcoin-trade'/>
                          <Tab label='Wallet' style={{ color: activeTab === 'wallet' ? '#00ab41' : 'white' }} href='#wallet' value={'wallet'} />
                        </Tabs>
                      
                        <DrawerComp prop={view} onClose={this.closeDrawer} activeTab={activeTab}/>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='container-small'>
                <div className='image-container'>
                    <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1711524087/logo_v2_lun5cz.png" className="navbar-logo" />
                </div>
                <IconButton onClick={this.drawerIconEvent} sx={{ marginLeft: 'auto', marginRight: "20px" }}>
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>
            </>
        );
    }
}

export default Navbar;
