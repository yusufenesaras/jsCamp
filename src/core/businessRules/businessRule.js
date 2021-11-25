import Result from "../utilities/results/result.js";
import SuccessDataResult from "../utilities/results/successDataResult.js";

export default class BusinessRule {
    static run(logics) {
        for (const result of logics) {
            if (!result.success) {
                return Result;
            }
        }
        return SuccessDataResult;
    }
}