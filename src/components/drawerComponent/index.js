import { Component } from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import { AppBar, Toolbar, Tabs, Tab, IconButton } from "@mui/material";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import './index.css';

class DrawerComp extends Component {
    state = {
        drawer_state: true,
        activeTab: 'home' // Default active tab is 'home'
    }

    // Function to handle tab selection
    handleTabClick = (value) => {
        this.setState({ activeTab: value });
    }

    render() {
        const { prop, onClose } = this.props;
        const { activeTab } = this.state;

        // Define the items for the Drawer
        const drawerItems = [
            { text: 'Home', value: 'home', navigate: "home", icon: <HouseOutlinedIcon sx={{ color: activeTab === 'home' ? '#00ab41' : '#ccc' }} /> },
            { text: 'Organization', value: 'organization', navigate: "organization", icon: <DomainOutlinedIcon sx={{ color: activeTab === 'organization' ? '#00ab41' : '#ccc' }} /> },
            { text: 'Assets', value: 'assets', navigate: "assets", icon: <ViewInArOutlinedIcon sx={{ color: activeTab === 'assets' ? '#00ab41' : '#ccc' }} /> },
            { text: 'Trade', value: 'trade', navigate: "trade", icon: <ImportExportOutlinedIcon sx={{ color: activeTab === 'trade' ? '#00ab41' : '#ccc' }} /> },
            { text: 'Wallet', value: 'wallet', navigate: "wallet", icon: <AccountBalanceWalletOutlinedIcon sx={{ color: activeTab === 'wallet' ? '#00ab41' : '#ccc' }} /> }
        ];

        console.log(activeTab,'active tab in drawer')

        return (
            <Drawer open={prop} onClose={onClose} sx={{ height: '100%', '& .MuiDrawer-paper': { backgroundColor: '#454545', width: '200px', maxHeight: '100vh', display: 'flex', flexDirection: 'column' } }}>
                <List sx={{ flexGrow: 1 }}>
                {drawerItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            selected={activeTab === item.value}
                            onClick={() => this.handleTabClick(item.value)}
                            component={Link} // Use Link component for navigation
                            href={`#${item.navigate}`} // Specify the navigation destination
                            
                            sx={{
                                justifyContent: 'center',
                                paddingTop: '25px',
                                paddingBottom: '5px',
                                textAlign: 'center'
                            }}
                        >
                            {item.icon}
                            <ListItemText
                                primary={item.text}
    
                                sx={{ textAlign: 'center', color: activeTab === item.value ? '#00ab41' : '#ffff' }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default DrawerComp;
