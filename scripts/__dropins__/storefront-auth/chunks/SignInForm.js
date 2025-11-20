/*! Copyright 2025 Adobe
All Rights Reserved. */
import { jsx as m, jsxs as M } from "@dropins/tools/preact-jsx-runtime.js";
import { Slot as Z, classes as z } from "@dropins/tools/lib.js";
import { c as E, g as R, u as tt, B as K } from "./Button2.js";
import {
  useState as y,
  useCallback as c,
  useEffect as J,
  useMemo as rt,
} from "@dropins/tools/preact-hooks.js";
import "@dropins/tools/event-bus.js";
import "@dropins/tools/recaptcha.js";
import { a as at } from "./getCustomerToken.js";
import { r as et } from "./resendConfirmationEmail.js";
import { s as ot, a as it } from "./simplifyTransformAttributesForm.js";
import { f as st, E as nt } from "./focusOnEmptyPasswordField.js";
import { c as ut } from "./confirmEmail.js";
import { useText as mt } from "@dropins/tools/i18n.js";
import {
  Header as ct,
  InLineAlert as ft,
  InputPassword as dt,
} from "@dropins/tools/components.js";
import { u as lt, F as ht } from "./Button.js";

const gt = ({
  emailConfirmationStatusMessage: t,
  translations: e,
  initialEmailValue: s,
  routeSignUp: l,
  routeForgotPassword: u,
  routeRedirectOnSignIn: F,
  onErrorCallback: _,
  setActiveComponent: a,
  onSuccessCallback: f,
  onSignUpLinkClick: h,
  handleSetInLineAlertProps: i,
  routeRedirectOnEmailConfirmationClose: b,
}) => {
  const [S, L] = y("");
  const [v, n] = y(!1);
  const [g, d] = y("");
  const [A, w] = y(!1);
  const [U, j] = y({ userName: "", status: !1 });
  const [q, x] = y(!1);
  const [P, N] = y([]);

  const k = c(async (r) => {
    i();
    n(!0);
    w(!1);
    N([]);
    await et(r);
  }, [i]);

  const V = c((r) => {
    r.length ? w(!1) : w(!0);
    d(r);
  }, []);

  J(() => {
    if ((t == null ? void 0 : t.text) != null) {
      i({ text: t.text, type: t.status ? t.status : void 0 });
    }
  }, [t, i]);

  const D = c(() => {
    if (!g.length) {
      w(!0);
    }
  }, [g]);

  const p = c(
    (r, o) => {
      if (g.length) {
        return !1;
      }
      w(!0);
      if (o) {
        st(r, g, "");
      }
      return !0;
    },
    [g],
  );

  const B = c(
    (r, o) => {
      if (o != null && o.userName) {
        r.target.reset();
        if (E(F)) {
          window.location.href = F();
        } else {
          f == null || f({ userName: o == null ? void 0 : o.userName, status: !0 });
          j({ userName: o == null ? void 0 : o.userName, status: !0 });
        }
      }
    },
    [f, F],
  );

  const C = c(
    (r, o) => {
      var I;
      if (((I = r == null ? void 0 : r.errorMessage) == null ? void 0 : I.length)) {
        L(o);
        const H = r.errorMessage.includes(
          "This account isn't confirmed. Verify and try again.",
        );
        const T = H ? e.resendEmailInformationText : r.errorMessage;
        N(
          H
            ? [
                {
                  label: e.resendEmailButtonText,
                  onClick: () => {
                    k(o);
                  },
                },
              ]
            : [],
        );
        i({ text: T, type: "error" });
        d("");
      }
    },
    [k, i, e.resendEmailButtonText, e.resendEmailInformationText],
  );

  const G = c(
    async (r, o) => {
      if (i(), p(r, o)) {
        return;
      }
      x(!0);
      const I = R(r.target);
      if (Object.values(I).every((T) => T)) {
        const { email: T, password: Y } = I;
        const $ = await at({
          email: T,
          password: Y,
          handleSetInLineAlertProps: i,
          onErrorCallback: _,
          translations: e,
        });
        C($, T);
        B(r, $);
        w(!1);
      }
      x(!1);
    },
    [e, _, p, C, B, i],
  );

  const O = c(() => {
    if (E(a)) {
      a("resetPasswordForm");
      return;
    }
    if (E(u)) {
      window.location.href = u();
    }
  }, [u, a]);

  const Q = c(() => {
    if (E(h)) {
      h();
    }
    if (E(a)) {
      a("signUpForm");
      return;
    }
    if (E(l)) {
      window.location.href = l();
    }
  }, [h, l, a]);

  const W = rt(() => {
    const r = ot(it);
    if ((s == null ? void 0 : s.length) && r) {
      return r.map((o) => ({ ...o, defaultValue: s }));
    }
    return r;
  }, [s]);

  const X = c(() => {
    i();
    if (E(b)) {
      window.location.href = b();
    } else {
      n(!1);
    }
  }, [i, b]);

  return {
    additionalActionsAlert: P,
    userEmail: S,
    defaultEnhancedEmailFields: W,
    passwordError: A,
    isSuccessful: U,
    isLoading: q,
    signInPasswordValue: g,
    showEmailConfirmationForm: v,
    setShowEmailConfirmationForm: n,
    setSignInPasswordValue: d,
    submitLogInUser: G,
    forgotPasswordCallback: O,
    onSignUpLinkClickCallback: Q,
    handledOnPrimaryButtonClick: X,
    handleSetPassword: V,
    onBlurPassword: D,
  };
};

const wt = () => {
  const t = new URL(window.location.href);
  const e = t.searchParams.get("email");
  const s = t.searchParams.get("key");
  if (e && s) {
    t.searchParams.delete("email");
    t.searchParams.delete("key");
    window.history.replaceState({}, document.title, t.toString());
  }
};

const yt = ({ enableEmailConfirmation: t }) => {
  const e = mt({
    accountConfirmMessage: "Auth.EmailConfirmationForm.accountConfirmMessage",
    accountConfirmationEmailSuccessMessage:
      "Auth.EmailConfirmationForm.accountConfirmationEmailSuccessMessage",
  });
  const [s, l] = y({ text: "", status: "" });

  J(() => {
    if (t) {
      const { search: u } = window.location;
      if (u.includes("email=") && u.includes("key=")) {
        (async () => {
          var f, h, i;
          const _ = new URLSearchParams(u);
          const a = await ut({
            customerEmail: _.get("email"),
            customerConfirmationKey: _.get("key"),
          });
          if (!a) {
            return null;
          }
          if ((f = a == null ? void 0 : a.errors) != null && f.length) {
            l({ text: a == null ? void 0 : a.errors[0].message, status: "error" });
          } else {
            l({
              text: a.data.confirmEmail.customer.email
                ? e.accountConfirmationEmailSuccessMessage.replace(
                    "{email}",
                    (i = (h = a == null ? void 0 : a.data) == null
                      ? void 0
                      : h.confirmEmail.customer) == null
                      ? void 0
                      : i.email,
                  )
                : e.accountConfirmMessage,
              status: "success",
            });
            wt();
          }
        })();
      }
    }
  }, [t, e]);

  return { emailConfirmationStatusMessage: s };
};

const Mt = ({
  slots: t,
  labels: e,
  formSize: s = "default",
  initialEmailValue: l = "",
  renderSignUpLink: u = !1,
  enableEmailConfirmation: F = !1,
  hideCloseBtnOnEmailConfirmation: _ = !1,
  routeRedirectOnEmailConfirmationClose: a,
  routeRedirectOnSignIn: f,
  routeForgotPassword: h,
  routeSignUp: i,
  onSuccessCallback: b,
  setActiveComponent: S,
  onErrorCallback: L,
  onSignUpLinkClick: v,
}) => {
  const n = lt({
    title: "Auth.SignInForm.title",
    buttonPrimary: "Auth.SignInForm.buttonPrimary",
    buttonSecondary: "Auth.SignInForm.buttonSecondary",
    buttonTertiary: "Auth.SignInForm.buttonTertiary",
    resendEmailInformationText:
      "Auth.Notification.resendEmailNotification.informationText",
    resendEmailButtonText: "Auth.Notification.resendEmailNotification.buttonText",
    customerTokenErrorMessage: "Auth.Api.customerTokenErrorMessage",
    placeholder: "Auth.InputPassword.placeholder",
    floatingLabel: "Auth.InputPassword.floatingLabel",
    requiredFieldError: "Auth.FormText.requiredFieldError.default",
  });

  const { emailConfirmationStatusMessage: g } = yt({
    enableEmailConfirmation: F,
  });

  const { inLineAlertProps: d, handleSetInLineAlertProps: A } = tt();

  const {
    userEmail: w,
    additionalActionsAlert: U,
    defaultEnhancedEmailFields: j,
    passwordError: q,
    isSuccessful: x,
    isLoading: P,
    signInPasswordValue: N,
    showEmailConfirmationForm: k,
    submitLogInUser: V,
    forgotPasswordCallback: D,
    onSignUpLinkClickCallback: p,
    handledOnPrimaryButtonClick: B,
    handleSetPassword: C,
    onBlurPassword: G,
  } = gt({
    translations: n,
    emailConfirmationStatusMessage: g,
    initialEmailValue: l,
    routeSignUp: i,
    routeForgotPassword: h,
    routeRedirectOnSignIn: f,
    setActiveComponent: S,
    onErrorCallback: L,
    onSuccessCallback: b,
    onSignUpLinkClick: v,
    handleSetInLineAlertProps: A,
    routeRedirectOnEmailConfirmationClose: a,
  });

  if (x.status && (t == null ? void 0 : t.SuccessNotification)) {
    return m(Z, {
      "data-testid": "successNotificationTestId",
      name: "SuccessNotification",
      slot: t == null ? void 0 : t.SuccessNotification,
      context: { isSuccessful: x },
    });
  }

  if (k) {
    return m(nt, {
      formSize: s,
      userEmail: w,
      inLineAlertProps: d,
      hideCloseBtnOnEmailConfirmation: _,
      handleSetInLineAlertProps: A,
      onPrimaryButtonClick: B,
    });
  }

  return M("div", {
    className: z(["auth-sign-in-form", `auth-sign-in-form--${s}`]),
    "data-testid": "signInForm",
    children: [
      m(ct, {
        title: (e == null ? void 0 : e.formTitleText) ?? n.title,
        divider: !1,
        className: "auth-sign-in-form__title",
      }),
      d.text
        ? m(ft, {
            "data-testid": "authInLineAlert",
            className: "auth-sign-in-form__notification",
            type: d.type,
            variant: "secondary",
            heading: d.text,
            icon: d.icon,
            additionalActions: U,
          })
        : null,
      M(ht, {
        name: "signIn_form",
        className: "auth-sign-in-form__form",
        onSubmit: V,
        loading: P,
        fieldsConfig: j,
        children: [
          m(dt, {
            hideStatusIndicator: !0,
            className: "auth-sign-in-form__form__password",
            autoComplete: "current-password",
            errorMessage: q ? n.requiredFieldError : void 0,
            defaultValue: N,
            onValue: C,
            onBlur: G,
            placeholder: n.placeholder,
            floatingLabel: n.floatingLabel,
          }),
          M("div", {
            className: "auth-sign-in-form__form__buttons",
            children: [
              M("div", {
                className: "auth-sign-in-form__form__buttons__combine",
                children: [
                  m(K, {
                    type: "button",
                    variant: "tertiary",
                    style: { padding: 0 },
                    buttonText: n.buttonTertiary,
                    className:
                      "auth-sign-in-form__button auth-sign-in-form__button--forgot",
                    enableLoader: !1,
                    onClick: D,
                    "data-testid": "switchToSignUp",
                  }),
                  u ? m("span", {}) : null,
                  u
                    ? m(K, {
                        type: "button",
                        variant: "tertiary",
                        style: { padding: 0 },
                        buttonText: n.buttonSecondary,
                        className:
                          "auth-sign-in-form__button auth-sign-in-form__button--signup",
                        enableLoader: !1,
                        onClick: p,
                      })
                    : null,
                ],
              }),
              m(K, {
                type: "submit",
                buttonText: (e == null ? void 0 : e.primaryButtonText) ?? n.buttonPrimary,
                variant: "primary",
                className:
                  "auth-sign-in-form__button auth-sign-in-form__button--submit",
                enableLoader: P,
              }),
            ],
          }),
        ],
      }),
      m("div", { id: "generateCustomerToken" }),
    ],
  });
};

export { Mt as S };
//# sourceMappingURL=SignInForm.js.map
