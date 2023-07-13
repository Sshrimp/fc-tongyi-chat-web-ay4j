import { useState } from "react";
import { TroubleBrewingRole } from '../../static/roleMapping';
import './index.less';

const HostPage = () => {

    const [kindRoleList] = useState(['washerwoman', 'librarian', 'investigator', 'chef', 'empath', 'fortunetelle' ,'undertaker', 'monk', 'ravenkeeper', 'virgin', 'slayer', 'soldier', 'mayor']);
    const [selectedKindRoleList, setSelectedKindRoleList] = useState<any>([]);
    const [outRoleList]  = useState(['butler', 'drunk', 'recluse', 'saint',]);
    const [selectedOutRoleList, setSelectedOutRoleList]  = useState<any>([]);
    const [minionsRoleList]  = useState(['poisoner', 'spy', 'scarletwoman', 'baron',]);
    const [selectedMinionsRoleList, setSelectedMinionsRoleList]  = useState<any>([]);
    const [demonRoleList]  = useState(['imp',]);
    const [selectedDemonRoleList, SetselectedDemonRoleList]  = useState<any>([]);

    const configList = (role: any, type: string) => {
        if( type === 'kind') {
            const isSelected = selectedKindRoleList.find(item => item === role);
            if(isSelected) {
                setSelectedKindRoleList([...selectedKindRoleList.filter(item => item !== role)])
            } else {
                selectedKindRoleList.push(role);
                setSelectedKindRoleList([...selectedKindRoleList])
            }
        }
        if( type === 'out') {
            const isSelected = selectedOutRoleList.find(item => item === role);
            if(isSelected) {
                setSelectedOutRoleList([...selectedOutRoleList.filter(item => item !== role)])
            } else {
                selectedOutRoleList.push(role);
                setSelectedOutRoleList([...selectedOutRoleList])
            }
        }
        if( type === 'minions') {
            const isSelected = selectedMinionsRoleList.find(item => item === role);
            if(isSelected) {
                setSelectedMinionsRoleList([...selectedMinionsRoleList.filter(item => item !== role)])
            } else {
                selectedMinionsRoleList.push(role);
                setSelectedMinionsRoleList([...selectedMinionsRoleList])
            }
        }
        if( type === 'demon') {
            const isSelected = selectedDemonRoleList.find(item => item === role);
            if(isSelected) {
                SetselectedDemonRoleList([...selectedDemonRoleList.filter(item => item !== role)])
            } else {
                selectedDemonRoleList.push(role);
                SetselectedDemonRoleList([...selectedDemonRoleList])
            }
        }

    };



    return <div className="HM-host-container">
        <div className="HM-host-read-list">
            <ul className="HM-kind-list">
                <li className="HM-list-title HM-list-kind-title">村民</li>
                {kindRoleList.map((item: any) => {
                    return <li className={`HM-list-role ${selectedKindRoleList.includes(item) ? 'HM-list-role-selected' : '' }`} key={item} onClick={() => {configList(item, 'kind')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                <li className="HM-list-title HM-list-outsied-title">外来者</li>
                {outRoleList.map((item: any) => {
                    return <li className={`HM-list-role ${selectedOutRoleList.includes(item) ? 'HM-list-role-selected' : '' }`} key={item} onClick={() => {configList(item, 'out')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                 <li className="HM-list-title HM-list-minion-title">爪牙</li>
                {minionsRoleList.map((item: any) => {
                    return <li className={`HM-list-role ${selectedMinionsRoleList.includes(item) ? 'HM-list-role-selected' : '' }`} key={item} onClick={() => {configList(item, 'minions')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                <li className="HM-list-title HM-list-demon-title">恶魔</li>
                {demonRoleList.map((item: any) => {
                    return <li className={`HM-list-role ${selectedDemonRoleList.includes(item) ? 'HM-list-role-selected' : '' }`} key={item} onClick={() => {configList(item, 'demon')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
            </ul>
        </div>
        <div className="HM-host-select-list">
             <ul className="HM-kind-list">
                <li className="HM-list-title HM-list-kind-title">村民</li>
                {selectedKindRoleList.map((item: any) => {
                    return <li className="HM-list-role" key={item} onClick={() => {configList(item, 'kind')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                <li className="HM-list-title HM-list-outsied-title">外来者</li>
                {selectedOutRoleList.map((item: any) => {
                    return <li className="HM-list-role" key={item} onClick={() => {configList(item, 'out')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                 <li className="HM-list-title HM-list-minion-title">爪牙</li>
                {selectedMinionsRoleList.map((item: any) => {
                    return <li className="HM-list-role" key={item} onClick={() => {configList(item, 'minions')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
                <li className="HM-list-title HM-list-demon-title">恶魔</li>
                {selectedDemonRoleList.map((item: any) => {
                    return <li className="HM-list-role" key={item} onClick={() => {configList(item, 'demon')}}>
                        <img className="HM-kind-image" src={TroubleBrewingRole[item]?.imageUrl} alt="" />
                        <div className="HM-kind-name">
                            {TroubleBrewingRole[item]?.text}
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>
};

export default HostPage;