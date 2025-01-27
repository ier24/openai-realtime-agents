export const reservationStateMachine = [
  {
    "id": "1_greeting",
    "description": "挨拶と予約受付の開始",
    "instructions": [
      "丁寧に挨拶する",
      "予約受付を開始することを伝える"
    ],
    "examples": [
      "いつもご利用ありがとうございます。本日は予約の受付を承ります。",
      "ご予約のお電話ありがとうございます。ご予約の受付をさせていただきます。"
    ],
    "transitions": [{
      "next_step": "2_date_time",
      "condition": "挨拶が完了したら"
    }]
  },
  {
    "id": "2_date_time",
    "description": "予約希望日時の確認",
    "instructions": [
      "予約希望の日時を確認する",
      "日時が不明確な場合は具体的に確認する",
      "予約可能かどうかを確認する"
    ],
    "examples": [
      "ご予約のお日にちとお時間はいつがよろしいでしょうか？",
      "〇月〇日の〇時でお間違いございませんでしょうか？"
    ],
    "transitions": [{
      "next_step": "3_party_size",
      "condition": "日時が確定したら"
    }]
  },
  {
    "id": "3_party_size",
    "description": "予約人数の確認",
    "instructions": [
      "予約人数を確認する",
      "人数に応じた席の案内をする"
    ],
    "examples": [
      "何名様でいらっしゃいますでしょうか？",
      "〇名様でお間違いございませんでしょうか？"
    ],
    "transitions": [{
      "next_step": "4_customer_info",
      "condition": "人数が確定したら"
    }]
  },
  {
    "id": "4_customer_info",
    "description": "お客様情報の確認",
    "instructions": [
      "お名前を確認する",
      "電話番号を確認する",
      "確認のため復唱する"
    ],
    "examples": [
      "お客様のお名前を承ってもよろしいでしょうか？",
      "お電話番号をお願いできますでしょうか？",
      "確認のため復唱させていただきます。〇〇様、電話番号は〇〇〇でお間違いございませんでしょうか？"
    ],
    "transitions": [{
      "next_step": "5_special_requests",
      "condition": "お客様情報が確認できたら"
    }]
  },
  {
    "id": "5_special_requests",
    "description": "特別な要望の確認",
    "instructions": [
      "席の希望を確認する",
      "アレルギー情報などを確認する",
      "その他の要望を確認する"
    ],
    "examples": [
      "お席のご希望などはございますでしょうか？",
      "食物アレルギーなど、特別なご要望はございますでしょうか？"
    ],
    "transitions": [{
      "next_step": "6_confirmation",
      "condition": "特別な要望の確認が完了したら"
    }]
  },
  {
    "id": "6_confirmation",
    "description": "予約内容の最終確認",
    "instructions": [
      "予約内容を全て復唱する",
      "予約を確定する",
      "予約番号を案内する",
      "変更・キャンセルの際の連絡方法を案内する"
    ],
    "examples": [
      "ご予約の内容を確認させていただきます。〇月〇日〇時より、〇名様でご予約を承りました。",
      "ご予約ありがとうございました。予約番号は〇〇〇〇でございます。",
      "ご予約の変更やキャンセルの際は、お電話にてご連絡ください。"
    ],
    "transitions": []
  }
];
