import dayjs from "dayjs";
import "dayjs/locale/en";

export const toRupiah = (n) =>
  n?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

export const formatLongDate = (d) => dayjs(d).format("dddd, DD MMMM YYYY");
