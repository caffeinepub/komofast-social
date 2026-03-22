import {
  ArrowDownLeft,
  ArrowUpRight,
  Building2,
  Check,
  Coins,
  CreditCard,
  Gift,
  Tag,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const TRANSACTIONS = [
  {
    id: 1,
    type: "credit",
    title: "Course Sale",
    desc: "Python Programming",
    amount: 699,
    coins: 70,
    date: "Today, 2:30 PM",
  },
  {
    id: 2,
    type: "credit",
    title: "Honor Reward",
    desc: "Silver tier bonus",
    amount: 50,
    coins: 500,
    date: "Today, 9:00 AM",
  },
  {
    id: 3,
    type: "debit",
    title: "Withdrawal",
    desc: "UPI transfer",
    amount: -2000,
    coins: 0,
    date: "Yesterday",
  },
  {
    id: 4,
    type: "credit",
    title: "Ad Revenue",
    desc: "Content monetization",
    amount: 340,
    coins: 34,
    date: "Mar 19",
  },
  {
    id: 5,
    type: "credit",
    title: "Referral Bonus",
    desc: "Invited 3 friends",
    amount: 150,
    coins: 150,
    date: "Mar 18",
  },
  {
    id: 6,
    type: "credit",
    title: "Subscription Share",
    desc: "Academy Pro royalty",
    amount: 450,
    coins: 45,
    date: "Mar 17",
  },
  {
    id: 7,
    type: "debit",
    title: "Withdrawal",
    desc: "Bank transfer",
    amount: -5000,
    coins: 0,
    date: "Mar 15",
  },
];

type PromoResult =
  | {
      status: "success";
      message: string;
      type: "balance" | "coins" | "info";
      value?: number;
    }
  | { status: "error"; message: string };

function applyPromoCode(code: string): PromoResult {
  switch (code.trim().toUpperCase()) {
    case "KOMO10":
      return {
        status: "success",
        message: "₹100 cashback added to your balance!",
        type: "balance",
        value: 100,
      };
    case "WELCOME50":
      return {
        status: "success",
        message: "₹500 cashback added to your balance!",
        type: "balance",
        value: 500,
      };
    case "COINS100":
      return {
        status: "success",
        message: "100 KomoCoins added to your wallet!",
        type: "coins",
        value: 100,
      };
    case "ACADEMY":
      return {
        status: "success",
        message: "20% off on Academy subscription! Use at checkout.",
        type: "info",
      };
    default:
      return {
        status: "error",
        message: "Invalid promo code. Please check and try again.",
      };
  }
}

export default function WalletPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [withdrawMethod, setWithdrawMethod] = useState<"upi" | "bank">("upi");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "credit" | "debit">("all");

  const [balance, setBalance] = useState(4890);
  const [coins, setCoins] = useState(2450);

  const [promoCode, setPromoCode] = useState("");
  const [promoResult, setPromoResult] = useState<PromoResult | null>(null);
  const [promoApplied, setPromoApplied] = useState(false);

  const filteredTxns = TRANSACTIONS.filter(
    (t) => activeTab === "all" || t.type === activeTab,
  );

  const handleWithdraw = () => {
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setShowWithdrawModal(false);
      setWithdrawAmount("");
      setUpiId("");
    }, 2000);
  };

  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    const result = applyPromoCode(promoCode);
    setPromoResult(result);
    if (result.status === "success") {
      setPromoApplied(true);
      if (result.type === "balance" && result.value) {
        setBalance((prev) => prev + result.value!);
      } else if (result.type === "coins" && result.value) {
        setCoins((prev) => prev + result.value!);
      }
    }
  };

  const handleClosePromo = () => {
    setShowPromoModal(false);
    setPromoCode("");
    setPromoResult(null);
    setPromoApplied(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Balance Cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div
          className="rounded-2xl p-4 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
        >
          <div className="text-white/70 text-xs mb-1">INR Balance</div>
          <div className="text-white font-bold text-2xl">
            ₹{balance.toLocaleString()}
          </div>
          <div className="text-white/60 text-xs mt-1">Available</div>
          <div className="absolute right-3 top-3 opacity-20">
            <Wallet size={40} />
          </div>
        </div>
        <div
          className="rounded-2xl p-4 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F59E0B, #EF4444)" }}
        >
          <div className="text-white/70 text-xs mb-1">KomoCoins</div>
          <div className="text-white font-bold text-2xl">
            {coins.toLocaleString()}
          </div>
          <div className="text-white/60 text-xs mt-1">
            ≈ ₹{(coins * 0.1).toFixed(0)}
          </div>
          <div className="absolute right-3 top-3 opacity-20">
            <Coins size={40} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <button
          type="button"
          data-ocid="wallet.withdraw_button"
          onClick={() => setShowWithdrawModal(true)}
          className="bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10 hover:bg-white/10 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <ArrowDownLeft size={18} className="text-green-400" />
          </div>
          <span className="text-gray-300 text-xs font-medium">Withdraw</span>
        </button>
        <button
          type="button"
          data-ocid="wallet.secondary_button"
          className="bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10"
        >
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <ArrowUpRight size={18} className="text-blue-400" />
          </div>
          <span className="text-gray-300 text-xs font-medium">Add Money</span>
        </button>
        <button
          type="button"
          data-ocid="wallet.promo_button"
          onClick={() => setShowPromoModal(true)}
          className="bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10 hover:bg-white/10 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Gift size={18} className="text-yellow-400" />
          </div>
          <span className="text-gray-300 text-xs font-medium">Redeem</span>
        </button>
      </div>

      {/* Earning Breakdown */}
      <div className="bg-white/5 rounded-2xl p-4 mb-5 border border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={16} className="text-green-400" />
          <span className="text-white font-semibold text-sm">
            This Month's Earnings
          </span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Course Sales", amount: 2100, color: "text-purple-400" },
            { label: "Ad Revenue", amount: 680, color: "text-blue-400" },
            { label: "Honor Rewards", amount: 250, color: "text-yellow-400" },
            { label: "Referral Bonus", amount: 150, color: "text-green-400" },
            {
              label: "Subscription Share",
              amount: 450,
              color: "text-pink-400",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">{item.label}</span>
              <span className={`font-semibold text-sm ${item.color}`}>
                +₹{item.amount}
              </span>
            </div>
          ))}
          <div className="h-px bg-white/10 my-1" />
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">Total</span>
            <span className="text-green-400 font-bold">+₹3,630</span>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-semibold">Transactions</span>
          <div className="flex gap-1">
            {(["all", "credit", "debit"] as const).map((tab) => (
              <button
                type="button"
                key={tab}
                data-ocid={`wallet.${tab}.tab`}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTab === tab
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {tab === "all" ? "All" : tab === "credit" ? "Income" : "Outgo"}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {filteredTxns.map((txn, idx) => (
            <div
              key={txn.id}
              data-ocid={`wallet.transaction.item.${idx + 1}`}
              className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-3"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  txn.type === "credit" ? "bg-green-500/20" : "bg-red-500/20"
                }`}
              >
                {txn.type === "credit" ? (
                  <ArrowDownLeft size={16} className="text-green-400" />
                ) : (
                  <ArrowUpRight size={16} className="text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">
                  {txn.title}
                </div>
                <div className="text-gray-500 text-xs">
                  {txn.desc} · {txn.date}
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-bold text-sm ${
                    txn.type === "credit" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {txn.type === "credit" ? "+" : "-"}₹{Math.abs(txn.amount)}
                </div>
                {txn.coins > 0 && (
                  <div className="text-yellow-400 text-[10px]">
                    +{txn.coins} coins
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Code Modal */}
      {showPromoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4">
          <div
            data-ocid="wallet.promo.modal"
            className="bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6"
          >
            {promoApplied && promoResult?.status === "success" ? (
              <div className="text-center py-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    promoResult.type === "info"
                      ? "bg-blue-500/20"
                      : "bg-green-500/20"
                  }`}
                >
                  {promoResult.type === "info" ? (
                    <Tag size={32} className="text-blue-400" />
                  ) : (
                    <Check size={32} className="text-green-400" />
                  )}
                </div>
                <div
                  className={`font-bold text-lg mb-2 ${
                    promoResult.type === "info"
                      ? "text-blue-400"
                      : "text-green-400"
                  }`}
                >
                  {promoResult.type === "info"
                    ? "Promo Saved!"
                    : "Cashback Added!"}
                </div>
                <div className="text-gray-300 text-sm mb-6">
                  {promoResult.message}
                </div>
                <button
                  type="button"
                  data-ocid="wallet.promo.close_button"
                  onClick={handleClosePromo}
                  className="w-full py-3 rounded-2xl font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Tag size={16} className="text-yellow-400" />
                    </div>
                    <span className="text-white font-bold text-lg">
                      Promo Code
                    </span>
                  </div>
                  <button
                    type="button"
                    data-ocid="wallet.promo.close_button"
                    onClick={handleClosePromo}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-gray-400 text-sm mb-5">
                  Enter a promo code to get cashback, coins, or discounts.
                </p>

                <div className="mb-3">
                  <label
                    htmlFor="promo-input"
                    className="text-gray-400 text-xs mb-2 block"
                  >
                    Promo Code
                  </label>
                  <input
                    id="promo-input"
                    data-ocid="wallet.promo.input"
                    type="text"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value.toUpperCase());
                      setPromoResult(null);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyPromo()}
                    placeholder="e.g. KOMO10"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 uppercase tracking-widest font-mono"
                  />
                </div>

                {promoResult?.status === "error" && (
                  <div
                    data-ocid="wallet.promo.error_state"
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 mb-3"
                  >
                    <X size={14} />
                    {promoResult.message}
                  </div>
                )}

                <button
                  type="button"
                  data-ocid="wallet.promo.submit_button"
                  onClick={handleApplyPromo}
                  disabled={!promoCode.trim()}
                  className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                  }}
                >
                  Apply Code
                </button>

                <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">
                    Try these codes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["KOMO10", "WELCOME50", "COINS100", "ACADEMY"].map(
                      (code) => (
                        <button
                          type="button"
                          key={code}
                          onClick={() => {
                            setPromoCode(code);
                            setPromoResult(null);
                          }}
                          className="px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-600/30 text-purple-300 text-xs font-mono font-semibold hover:bg-purple-600/30 transition-all"
                        >
                          {code}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4">
          <div className="bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6">
            {withdrawSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <Check size={32} className="text-green-400" />
                </div>
                <div className="text-white font-bold text-lg mb-1">
                  Withdrawal Requested!
                </div>
                <div className="text-gray-400 text-sm">
                  ₹{withdrawAmount} will be transferred in 1-3 business days
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-white font-bold text-lg">
                    Withdraw Money
                  </span>
                  <button
                    type="button"
                    data-ocid="wallet.withdraw.close_button"
                    onClick={() => setShowWithdrawModal(false)}
                    className="text-gray-400"
                  >
                    <X size={20} />
                  </button>
                </div>
                {/* Method Toggle */}
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setWithdrawMethod("upi")}
                    className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      withdrawMethod === "upi"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <CreditCard size={16} /> UPI
                  </button>
                  <button
                    type="button"
                    onClick={() => setWithdrawMethod("bank")}
                    className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      withdrawMethod === "bank"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <Building2 size={16} /> Bank
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label
                      htmlFor="withdraw-amount"
                      className="text-gray-400 text-xs mb-1 block"
                    >
                      Amount (Min ₹500)
                    </label>
                    <input
                      id="withdraw-amount"
                      data-ocid="wallet.withdraw.input"
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  {withdrawMethod === "upi" ? (
                    <div>
                      <label
                        htmlFor="upi-id"
                        className="text-gray-400 text-xs mb-1 block"
                      >
                        UPI ID
                      </label>
                      <input
                        id="upi-id"
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Account Number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      />
                      <input
                        type="text"
                        placeholder="IFSC Code"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      />
                    </>
                  )}
                </div>

                <div className="text-gray-500 text-xs mb-4">
                  Available: ₹{balance.toLocaleString()} · Processing: 1-3
                  business days
                </div>

                <button
                  type="button"
                  data-ocid="wallet.withdraw.submit_button"
                  onClick={handleWithdraw}
                  disabled={!withdrawAmount || Number(withdrawAmount) < 500}
                  className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                  }}
                >
                  Withdraw ₹{withdrawAmount || 0}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
