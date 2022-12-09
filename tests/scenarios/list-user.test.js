import { assert } from "chai";
import ReqresApi from "$root/pages/reqres.api";
import * as data from '$root/data/user.data';
import { getParams } from '$helper/lib-api';

describe('Register', () => {

    it('Should unsuccessful register when insert invalid data', async () => {
        const param = getParams(data.LIST_USER_PARAM['page']);
        const response = await ReqresApi.list_user(param);

        assert.equal(response.status, 200);
    });
})