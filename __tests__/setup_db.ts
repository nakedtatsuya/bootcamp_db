import {RowDataPacket} from "mysql2";
import {execQuery} from "../util/exec_query";

test("ping", async () => {
  const result = (await execQuery("select 1 + 1")) as RowDataPacket[][];
  expect(result[0][0]["1 + 1"]).toBe(2);
});
