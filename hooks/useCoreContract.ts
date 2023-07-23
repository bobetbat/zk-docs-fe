import {useContractWrite} from 'wagmi';
import web3 from 'web3';

import ZKDocsCoreABI from '../contracts/ZKDocsCore.json';

const useCoreContract = () => {
    const { writeAsync } = useContractWrite({
        address: '0xD18aeF001607ff5D78FE5497611F0408CB32e92B',
        abi: ZKDocsCoreABI.abi,
        functionName: 'createContract',
        args: [
            '0x9a98F4e1d026917D31B88D2A127bbD870e94Ea58',
            1690109897031,
            '0x02CcFA1f950CDBde440a035025677F4d170abebF',
            web3.utils.toBigInt(1),
            '0xd960dff1fb1cd6651de1b2df7e7848ae8735fea7acbafd52450f086843cc01ea'
        ],
    });

    const sendTx = () => {
        writeAsync().then(resp => {
            console.log('Success', resp);
        }).catch(err => console.log('Err', err));
    };

    return { sendTx };
};

export default useCoreContract;
