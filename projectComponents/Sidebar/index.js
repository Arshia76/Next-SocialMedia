import React from 'react';
import {ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SidebarFooter,} from 'react-pro-sidebar';
import Resource from "../../public/Resource";
import Image from "next/image";


const Sidebar = props => {
    const Suffix = () => {
        return (
            <div style={{
                padding: '0 2px',
                color: 'white',
                backgroundColor: '#92A77A',
                borderRadius: '5px',
                height: '30px',
                width: 'max-content',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            }}>
                180
            </div>
        )
    }
    let menu;
    menu = () => (
        <Menu iconShape="circle">
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.FilledSVG.HOMEFILLED} alt="home"/>}>
                خانه
            </MenuItem>
            <MenuItem onClick={() => null} suffix={<Suffix/>}
                      icon={<Image src={Resource.Svg.CONTENT} alt="posts"/>}>
                پست ها
            </MenuItem>
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.FilledSVG.MESSAGEFILLED} alt="messages"/>}>
                پیام ها
            </MenuItem>
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.FilledSVG.GROUPFILLED} alt="friends"/>}>
                دوستان
            </MenuItem>
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.Svg.CALENDAR2} alt="events"/>}>
                رویدادها
            </MenuItem>
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.FilledSVG.VIDEOFILLED} alt="videos"/>}>
                ویدیوها
            </MenuItem>
            <MenuItem onClick={() => null}
                      icon={<Image src={Resource.FilledSVG.CAMERAFILLED} alt="photos"/>}>
                عکس ها
            </MenuItem>
        </Menu>

    )


    return (
        <ProSidebar onToggle={() => null} rtl breakPoint={'md'} toggled={null}>
            <SidebarHeader>
                <div className={'Sidebar-Header'}>
                    <h2>منو</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {menu()}
            </SidebarContent>
            <SidebarFooter>
                <div className={'Sidebar-Footer'}>
                    <h2>گروه های پربازدید</h2>
                    <div className={'Footer-Group'}>
                        <Image src={Resource.Images.MALEAVATAR}/>
                        <span>گروه</span>
                    </div>
                    <div className={'Footer-Group'}>
                        <Image src={Resource.Images.MALEAVATAR}/>
                        <span>گروه</span>
                    </div>
                    <div className={'Footer-Group'}>
                        <Image src={Resource.Images.MALEAVATAR}/>
                        <span>گروه</span>
                    </div>
                    <div className={'Footer-Group'}>
                        <Image src={Resource.Images.MALEAVATAR}/>
                        <span>گروه</span>
                    </div>
                    <div className={'Footer-Group'}>
                        <Image src={Resource.Images.MALEAVATAR}/>
                        <span>گروه</span>
                    </div>

                </div>
            </SidebarFooter>
        </ProSidebar>
    )
};


export default Sidebar;
