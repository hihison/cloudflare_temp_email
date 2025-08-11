import { LocaleMessages } from "./type";

const messages: LocaleMessages = {
    CustomAuthPasswordMsg: "您已啟用私有站點密碼，請提供密碼",
    UserTokenExpiredMsg: "您的令牌已過期，請重新登入",
    UserAcceesTokenExpiredMsg: "您的存取令牌已過期，請重新整理頁面",
    UserRoleIsNotAdminMsg: "您的使用者角色不是管理員，無權存取",
    NeedAdminPasswordMsg: "您需要提供管理員密碼才能存取此頁面",

    KVNotAvailableMsg: "KV 不可用，請聯絡管理員",
    DBNotAvailableMsg: "DB 不可用，請聯絡管理員",
    JWTSecretNotSetMsg: "JWT_SECRET 未設定，請聯絡管理員",
    WebhookNotEnabledMsg: "Webhook 未啟用，請聯絡管理員",
    DomainsNotSetMsg: "網域清單未設定，請聯絡管理員",

    TurnstileCheckFailedMsg: "人機驗證檢查失敗",
    NewAddressDisabledMsg: "新建信箱地址已停用，請聯絡管理員",
    NewAddressAnonymousDisabledMsg: "匿名使用者新建信箱地址已停用，請聯絡管理員",
    FailedCreateAddressMsg: "建立信箱地址失敗",
    InvalidAddressMsg: "無效的信箱地址",
    InvalidAddressCredentialMsg: "無效的信箱地址憑證",
    UserDeleteEmailDisabledMsg: "使用者刪除信箱/郵件已停用，請聯絡管理員",

    UserNotFoundMsg: "使用者不存在",
    UserAlreadyExistsMsg: "使用者已存在，請登入",
    FailedToRegisterMsg: "註冊失敗",
    UserRegistrationDisabledMsg: "使用者註冊已停用，請聯絡管理員",
    UserMailDomainMustInMsg: "使用者信箱網域必須在此清單中",
    InvalidVerifyCodeMsg: "無效的驗證碼",
    InvalidEmailOrPasswordMsg: "無效的信箱或密碼",
    VerifyMailSenderNotSetMsg: "驗證郵件發送信箱未設定，請聯絡管理員",
    CodeAlreadySentMsg: "驗證碼已發送，請稍候",
    InvalidUserDefaultRoleMsg: "無效的使用者預設角色，請聯絡管理員",
    FailedUpdateUserDefaultRoleMsg: "更新使用者預設角色失敗，請聯絡管理員",

    Oauth2ClientIDNotFoundMsg: "Oauth2 用戶端 ID 未設定，請聯絡管理員",
    Oauth2CliendIDOrCodeMissingMsg: "Oauth2 用戶端 ID 或 code 缺失",
    Oauth2FailedGetUserInfoMsg: "從 Oauth2 提供商取得使用者資訊失敗",
    Oauth2FailedGetAccessTokenMsg: "從 Oauth2 提供商取得存取令牌失敗",
    Oauth2FailedGetUserEmailMsg: "從 Oauth2 提供商取得使用者信箱失敗",
}

export default messages;
