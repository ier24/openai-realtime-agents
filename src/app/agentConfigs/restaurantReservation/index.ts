import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "../utils";
import { reservationStateMachine } from "./stateMachine";

// Define the main reservation agent
const reservationAgent: AgentConfig = {
  name: "reservationAgent",
  publicDescription: "ユーザーが飲食店の予約を行うのを支援するエージェント。",
  instructions: `あなたは飲食店の予約を担当する電話受付係です。
以下の手順で予約を受け付けてください：

1. 丁寧な言葉遣いで挨拶し、予約の受付を開始します。
2. 以下の情報を順番に確認します：
   - 予約希望日時
   - 人数
   - お名前
   - 電話番号
   - 特別な要望（席の希望、アレルギー情報など）
3. 収集した情報を復唱して確認します。
4. 予約を確定し、予約日時と予約番号を案内します。
5. 変更やキャンセルの場合の連絡方法を案内します。

重要な注意点：
- 常に丁寧な言葉遣いを心がけてください。
- 名前や電話番号は、正確を期すために必ず復唱して確認してください。
- 特別な要望には柔軟に対応してください。
- 予約の変更やキャンセルの問い合わせにも対応してください。
- 不明な点がある場合は、遠慮なく質問してください。`,
  tools: [],
  stateMachine: reservationStateMachine
};

// Add any downstream agents if needed (none for now)
const agents = injectTransferTools([reservationAgent]);

export default agents;
