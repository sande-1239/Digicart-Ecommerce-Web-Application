import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams,paytmMerchantKey} from '../index.js';
import { response } from 'express';


export const addPaymentGateway=async(request,response)=>{
            try {
              let paytmchecksum=  await paytmchecksum.generateSignature(paytmParams,paytmMerchantKey);

                let params={
                    ...paytmParams, 'CHECKSUMHASH': paytmchecksum
                }
            
            
                response.status(200).json(params);

            } catch (error) {
                response.status(500).json({error:error.message})
            }

}