import { Injectable, InternalServerErrorException } from '@nestjs/common';
import Firehose from 'src/lib/aws/firehose';

@Injectable()
export class PollService {

    public async storeVote() {
        try {
            const  recordParams = {
                Record: {
                  Data: JSON.stringify({ id: 1, vote_id: 2})
                },
                DeliveryStreamName: 'PUT-S3-mCMFj'
              }
            const data = await Firehose.putRecord(
                recordParams
            );
            console.log('data', data);
            
            return data;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
        
    }
}
