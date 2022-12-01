import { assert } from "chai";
import ReqresApi from "$root/pages/reqres.api";
import * as data from '$root/data/user.data';

describe('Register', () => {

    it('Should unsuccessful register when insert invalid data', async () => {
        const response = await ReqresApi.register(data.INVALID_REGISTER);

        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error);
        assert.equal(response.data.error, data.ERROR_REGISTER_MESSAGE.error);
    })
})