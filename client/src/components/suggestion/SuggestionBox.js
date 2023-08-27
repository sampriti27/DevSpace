import React from "react";
import Link from "next/link";
import FriendProfilePreview from "./FriendProfilePreview";
import { useMantineColorScheme } from "@mantine/core";

const SuggestionBox = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center text-gray-400">
        <p className="text-sm font-semibold">Suggested for you</p>
        <p
          className={`text-sm ${
            dark ? "text-gray-400" : "text-black"
          } font-medium cursor-pointer`}
        >
          See All
        </p>
      </div>
      <div className="mt-2">
        <FriendProfilePreview
          name="Ash Allen"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&usqp=CAU"
          username="_.elena._4"
          mutualFriendsLength={15}
        />
        <FriendProfilePreview
          name="Ginny Weasley"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBUYGRgYGRgYGBgYGBoZGBgZGhgaGBgcIS4lHB4rIxgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAEDAgMFBwIFAgUEAwAAAAEAAhEDIQQSMQVBUWFxBiKBkaGx8BMyQlLB0eFi8RRygpKyI6LC4gcVJP/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAQACAwEBAAMBAAAAAAAAAAECEQMhMRJBUWFxIv/aAAwDAQACEQMRAD8A5KjQRhWQJGAjhCEARoQgAgCARoQgCMnSxE7zbyTRdPTcn2eZ53P8BZ5ZN8MP2kimTp66KRRwpJifIfPdONA5TzM/z6wnARYTfp+pJWVybTFKwGzyD3m907ywu9WmytadJrYhoOt8roNrjeR4woeBwxdFxAvqJ8v1Vy+i5jYz6xAyiCY0uOCjZcVZtGm0MJaNDMRNxcAHhyVBtHBwQ5ghpEgg7ze8/sFd4mqx0tJyu9DxI1jwkcVFawOYWfcWmWxYkG55+G6SrY5M8sWbpVS0qzF78VV12kEyIPPXy4JzB4iDlP2n0K1jDKLGEYCVCPKrqkwhCWGoEIEwjAR5UeVAmEYCVlRwgQGo4Sw1HlQN5UcJcI8qBvKhlTuVAhA1CGVLe2Gh8iCYjelQgahBOZUEFLCOEaCAkYQhGgJKAQRgIBCRVMCOKdUSo+TyUZVbGbpbI/lONfu/hMtBPTon6bY1WVdEPMJVlhSDqSOjR7hQKDC491s87n2V7szYz3kFwdHLT0WWVjTGWrHCiBMNcB+Zod5b5vwVTjazs7gwFpNjlgNd1Y3uEdQVqP8A6WvlyUwWtP5hu8QfdL2f2Je4lz3RfWBNlWZJuLEP2dUeJjW4HThwKFBj2STOmXgYM8OBAXW8NsZjGFpufZUO2+zJLSW3PMgKfpHy5RWJBMgHqZ9lGcRwhXG1NmvY4giPb0sqd7CF0Y5Szpz542LbA1c7b6ix/QqTCqdmvyvE6Ot47ldhqvGNIAQhOQhlUhACPKnIRwgRlQhLDUYagQGoZU5lRhqBrKjypzKjDUDcKJtKvlbG8qe6AJWbxlUvfA4wEEjZrXPdJJyt0G6Vc5UjBYbIwDfvUjKgZhBPZUEGdhHCUEaBMIwEoIwgTCMBKCVCBB0Kg0xNyrCpZp6KHSbKplWmEP0qZcYGg8vHgtFgNiNkZxLrSCYAJ0Eam2pMaJzszgwGfUcJky2YjumB6z5BW20nGnh3OB71Q5G8SHfefIEeIWGWTpxx2k9ntnsrOORoLGmLgBriN4jcF0bAbOY0DugnoI8lX7A2e2hRYwASGCY/MRLvUq5Ys5O91fK/kSTRaBbXomSwQbbypLZhRnAq9ZxFe3zULFtsp72KDigVSrxi9s7OD58fkLne1MAWE8vThfguuYmncrn3aVuR2YbzB9wVbC6qM9WdsiBBvqDu4jotBTdLQeKj7KwH1qrGDKHPexgLogF7gMx6CV1Sr2AwdFxz4ioWBgLWAsDxqCXPiC2Raw0uSujHJyZTXTmuVKDUsBKyrRQ2Go8qdDUeVA2Gow1OBqVlQNZUYancqMNQNZUAxPQiqODWkncgqNs4jK3KNSoexMLmdmOg0UfE1DVfA3mB0WnwmGDGBoQHlQyp7KgWoGMqCeyoIMugEEYQGjCARhAAjCACVCBNYS2Al4PZznuY3TMddcrfxOPPgFMw2GL3Nbv0/wAupJPTXyWiwWGa05gDewveOu6+/msM8nRx49JlGgAG02CGzlHRtyfCPUhMY9318bRw7R3Kbmg9ZzO9D6Kaa4pMfWeBlaDA46eZJEeCh9h6RfiS92rWue4/1O1/5HyWFdM6dQojcpLGquGJMdwSeJsPAnVVG0duVqUklh35ZExxiUitbJjgBcqM94lY7BdrXPMOaPCbdVfYbG5xKtar86WDnBRKxBVdtnaoosLiud7V7V4h5IZLWXvB0vwudDy3JJb4Wyet5jq9MauAPDf5Lnfalkh0Gd4KPA7UFOKlSm5+Y917wWt0mGi4mL3O+yj7axX1DmYwjSRG4q0xsqLlLOlFsrEZXAn7ZHhxXctidnsNXoU8Qx7w94Di8PLhnEiHMeS1wBkARzBm64PiW/TdI0cJ8Qr7s92pxNCWUqpax18hAc2bXAP2norz3bHKb/1Jx+FdTqvY8guY97XFohpIcQS0bgdY3SmQ1PYmu+o9z3xmeZMDKJ6BEAtpWJAalBqWAjDVITlR5UsNSg1A3lQDU7lR5UDYaqbb2KgZB4q6xNQMYXHcFj3l1WpG9x8glIsOz+Dkl5HRaDKhhcOGMDRuTuVA3CItTuVAtQNZEE7lRoMaEaCUEAARgIglgIBCWxJATtNtx1Cik9XmyaPdmLkxH9O/1MeBV7RpwY1cLm28Czb7gNRvJI3KFstmVgcd8Bo8Sb8p16HSZUypVFJjnk97Xeef7E+PELkzvbuwnSm7XY2SzDgySQ5/sB8/KtT2AwstrVPzPDR/pEn3C5c3FGpWNRxJJdP7Ls/YmmGYZnFxc4+LiPYBMpqSJxu901ts4jKQyQ0C5A73hw6rKYrs/iHskVx3vuaHWbc3cMwLjEETOh4rq+QEKBX2ZJ0CnG6RlPqa8ZbAbHazJ9N5LvxsLi5gvq0uNiBAImDHitZhsEGEXkHhohhNktBzHd8gclJqvv4qL33TGdajN9rdmtfUpsdOQukwdYBIHsk4zZFI0fpuYHCZnKBExDd4IADQLfhB1Vh2mBDWPG4g/ol4CtnZdTLouO52ymOwrnU/8Oym3K60kExaMwmACBEQLQlP2QKdFzTBgd0xeI0K2BotBlUPaGsAx0cCouVpMZJ105PtSCwcc7m9CLj0MKJQoQROk3480dXEZqmV32h7tNZfAJ/7W+SvsZs/KxjwO7AzbxIt5HXxWlumUmzmGFiCZIt14Hygp4MUXBiDEzu1B5iONp8grENWuF3GOc1kbDUoNSw1KDVdQgNR5U4GJQagaDUoMToYo+0cQKbC4+CDP9o8ZfIDYapfZjA61HDXRU9Gm6vVDfzGT0W9w+HDGho3BRE0nKiyp7KhlUoNZEMqeyoFiBnKgnsqCDBowgEYCAwEoBABKAQGAnKIkjqkAJ6gPnsqZ+LYTdanZWIzSIvZgO4D8RjhoPBVPbDGwBTBvN4t1+clI2c8suB3p0PEnu+Wqze1pc/Nr3v0sued5duu9Y9Htj7IfWY57Gk5ASY0sCb+R8l1fstVP+Hpf5AuQ4LF1aB7jspIgggOB89N3kuqdlqmfC0nA3DIMcWkh3qEzn6YX8bKjUU9jwQqHDVJVhRfZVxq+WKZWqgBVgdLlMYzMZOgVHtzZeKe7/8APUYxhuXODi8cmgWjmpvauOp0tdoYcOZcg2Wf7PYhhz0WuBcw6T+H9YJ9Qqjb2B2pkLKb21O7Dnh2Q3/pd+8eyb7E9lq+Hf8AXrvGbI5rWNM2dBJc4amw49Uuk701teQsh2nr5WOHI+q12OqCJXNO1mLkuEpjOzLLphG96qATEvA5XcNV02jhu4WOu27XXEaXg7rg+QXLbFx6n3XRdlY4ubJN8ok8y2P3V+W60y4Zu1VOwhZULTYsJ6EHToJj/cFZsFkxtX72uFwRHkePDRSqDDF/g1+dFfiqnNOxhqUGJbWpYatmBoMSwxONYlNYgbaxY3tNtDO/IPtbr1Wn23jBSpk/iNgsTs3COr1g3UTLioqY0PZPZ2VpqOF3adFo8qco0Q1oaNAlhilBjKgGKRlQDEDGVFlUjKhlQR8qCkZUSDnACUEQCUEBhLCIBLAQABSabYE793hH7jzTLBdTcG3V/DQcSdPDU+CzzvTTjm6kl+VriT9oP+82nwBI8FV1GgMabS1wJHnb2U3EPDWRvkjrYyedyVEwdA1CQdGifEWXPenXO+jO0Kec5mAkRctkjedy2nYHFgMdSJI/G0HdNnDzg/6iqLD5WNLIsb+f8pnD4k03teyzmmY4jQjyUfW5o+dXbrLOIUyg9ZzYm22Vm2N94OoKvMPUg8ii3sTH49jBL3Bo4kwq+v2rw7TAcXu4ME+Z3Ke2m113AHqJUc4VjJyta2dwbb0U43+VZMf1R1e1wdmbQove91pALgLanKP2UWntLHOcG/SY0Wu54BHgCVd5XE90AdASfUpLcKZ08TqlsXvyi7RquDCXQLTquW7crkNc5xu4mB7LonaPEhjDmOohcg2xjfqPt9osFfDHbn5MtGtm0s1Ro5iVssAIPIyDHDlwWV2PYuPIR1DgVstlMBflOkmd8gEh3pPmq813V+GaxFtJsBoMTJ0txE+YTmz3ZmgHUDzAP8qHtWuS7LI7sEdYJPpCfwhykxudmHQgW9x/IVuPqs+XuLRrE4GJNGo12h/cclIYxdDmIDEqIudAnWsVN2o2h9KnlB77rIMn2l2h9SoQPtbYdVpOyGy8lPO4d59+iy+wdnnEVgNWtMuK6eykGgAaCyiJpnIjDU9kQyKyDWVHlT2VHlQMFiBYn8qGVBHyoJ/Kgg5WEsBEAltCAwlAImtSwECmN+ct6nXawDj7n9reaZwlEvdA+D+w9VIxjMpjgNfT50WOU3dNsOsdq/EOLjkbexjw1VvTofSyN4tMnjIkD380xsrDn6mYixEabnOa0/qp+12dxjh+UHyH91lyRvxVAxpgg7p/v85KM5lwfXS+4qfVAewxrlkcJEn51UVkPGXfFuo/gnyWUbUzQBDi5jyx4uHCwngR80K12y+0r2ACs3lnAt4rG5y05hqd3M2PqrzY2Ka6GuAcDYjj+mbTr5K1vSsnbouy9s06gGV4J6q4ZUY7Vc4xXZgkCphqmUnQSQ0nhJ+13Iquf2lxuGdkqt7w/MIJHEHQhMbtFxdbqV2NFgAOSqdqbSaxpc4wI479y5vW7dVn7mjwVHtXbVWv97rcBYK/qmtB2u2+azy1p7otbjvKy7GyYQqG5VlsjCF+Z3DTmdf09Vt1ji5+88tJGEowIG4T5rRbIfleJ0t5H2uqt9LLHP1BU9j/ALdMpDoBNzIOYek+S57fquvXzDOPdlxGTQF0XgmDwMcVZbJZnBm0R5j56KlxFUOe12paRfkCPNX+wQJeP6j6iR7rXBhyLWlSvpffuUpjEbGJ5jF0Oamnw0Fx0Alcw2/tA1qrjqJytC2HbTaf02fTae8/XkFl+yWyzXrhxHcZc9VWpnTYdktk/Rohzh333KvsqeayLDQI8qlBnIhkT+RDKpDORGGJ6EeVDRjKhlT+VDKhpHyIJ+EES5E1KagAjARBQCW0JITjQgtdlQ1pMXdLRxjV8eEDxKiV6mdxPEk24D4T4qU1+W35Wx43Puo2FZdZY921tl1jIt8P3HafgYw24ZnkD/U30S9oN/6A5W8iRu5KK3Ef9SdwMjwECynYwAYc30LvORPsVlyRtx1SYR8b/tPobfOiQGZKnIX8B/6z5pnD1L8nC/z18FJxZsx+8HK7x18/0WPlbzuIe0mZHGNxkdJSMLiCxwdutzT2MMgTqAAY35bT5Qq4kjTQK8m5pS3V26hsXaWdpe0TaKjPzD8w58jr43sMVRpYhmSoA9mjSfuYd0O1HzVc92DtR1NwdPhy3jp83LamsHD6jNNXDx+fCs9aq/VY/bHZCpScTSl7OX3D91msTTc2Q4EHmur4XaEugn5wVb2l2Yyq2csO4jVays7HJPpkugalbbBYAMptA36zxkR85KgfgCyrG/OGkciR/PkttUqBjGknvdw9Igm28y4eSvyXckZcc+bap9oU8rg21m+Q3eNlHy5gwibPgf6mxHq3zT223/c/+ljR1axs/wDJRMNiO6eEgEcx9ruo/RZyNbUR7t+kG3K5/haXsw+S7/M0+bI/8VXnBZmvbBzRmaOZAI+cwkdl6rhUIafuZmjjBMjwzLTDqsuSbjfU2pWIqNYxz3aNEpWHcHXHssh292vlAoMNzd3RdG3MyG2cc7EVS7XMcrRymy6Z2W2SMPQaI7zhLj1WK7C7I+tW+o4dxmnMrqYaohTeVGGpwNSg1WDWVHlTuVCEDWVHlTgahlQNhqBanAECEDWVBO5USDjgSgEQCWAiBhP4Yd4dQm2pbEpPVjWENO/7L+BMJGCZEu4W8Snq7g5sjQlsjnkcPHTVRKLu6Run2t86rLHytsr3DjLu9E/i8VLC3fDvWCPVNUSAZPPzAm/iQoeIaSYncTPPWOphU5cdxbiy1UFj9PMdQf7+SsKdTO0s/MPUaes+abp0m1WZQ6Htu0XOuo9zbnxUVjnNdDhlIMxz+cFlcdt5lo6XGIO7X9VEqU4JHzkrF7mum9zxtw/jp7xalIixBtpzCSpsIwoIOg+DfK0/Z7aWUljrjhxbwA4j1jms59KYjlvmyfyPa5rrxPddunh/CXVJuNnVp5ajHN+1wHz5yWjfhw9gWR2RtFr2hjpnd+ZpOt+t1pcFios7QQM37jcVETYxm0tnhmJqyIhzSDwztsekghMY55c9jBEim2+g7wkx4XW02zhGvqNfbK9mR3Itu0nzPosZtrDCjUa2JAa0Dh3WwPCw81O1ZPUbaoOQcJcYBtaWk8zLSq3CEd8HQkj3H7Kz2jDmMAIgAdZd3nH1Pn5V+GpEtkXJidFPkRFy2tDGP3wM07okESNxg+KpKOJFOoCPwPkc2u1FvllPL3Nb09j8PmqbEMkkibTz4pjezKdOljabGUTUDgW5Znnw5LlWMrPxFUnV73QB10S6+PeWfTzHJqW7pCv/AP49wDX1jUeR3R3Qd/Erol365LNXpvezuy20KDGAXgE9SrTKlMIOiVCuqbhLDUqEakJhCEpHCBEIQnIQhA3CEJZCEIG4QTkIkHGGhKARNCWEQU0JwBIaE6AgcZUgN8D/ALS8fshS0vuTbohvS/VHVqBok/3Oqynta5eQWJrwC1v3ET0E+6LD7JxD2B7WPewkwWtJBsDJeYaRvt5rR7E2A6WVKgg/f9IzM/hNXlBkM5ibWds6eFzwXEmBAFg0AaAN0AHCFnln+NMMOtuTv2TWY6XMd55fY69UnEMJ+7Xrm8DHsV16vs1rxBjy/TRYjb/ZZ0ksvyGvzyWW7vtvJGaw9LNaQffwV3htlvcbB1xNpHtf0WQxlCpStlO/VpAtEwPEJGFxLpAc06T+0eyteO2blVnJjLqts7YTxBJI/wA1x4XDh5KTQwjBLXgOaRFpn5qs1h++O685RrJzR4m+8W3yE/ToZjAcR4T5+YVNarT2Cx1IU3yx8tBmbz0K0Wx9sBwBcRmi8xcAfiCzOOwFZgzCHN5X52Va3EuG4hw0jUcxCtMdqb06e7G0nCGvbpcSLfJWa7TPYW5swJERcHW4hUGFY95ljQ4QWkZi0yftdrq03taysmYGqGhr6HeLSwEucb91zXtg2NnNykR3p4K8w/tW8uvxBa8OZHAEjmTDYnlr4KTs/ClrATaSYOkRp7FMYei4Oax1gDA3jNrfh/Ct6zwCMplje6wzqSO86+8xPid6rUyqnE1ZAEcR4WieipXV8jiR0g35KxxLHaAST3gAJMX0HD9lUYlhJJ0jcrYTdRyZaiI8kmN5KvtmV/p5Q1xa5pBta/GVH7MtpGqRWs1zSGz81/ZWe1NmZC4T9l2kR3mG4M9Af9pWmU2xwunRez+0/r0g50B7TleBx3HoRBVm58LmfZvFVGueWAvazLmv3srpj2On9tlh8e17Q4HXj66q2OX5VMsddzxcfURfVVS/GjimjjxxV9qLsVU42oqFuOHFPsxg4psXQclBVlLEqXTqygkEIEINRqQUII0EHF2hLCCCILanWoIIG6roaOse8Kx7OYb6tXM4AtpExP5wRFt8eRgaiQggsc/10cc3p0PCYQm5Ot9Zmd5VpTpAIILCNqDmquxTM3z9UEFNRFNjdlsqtNN5IEyHAAljtMw48CN481icPso0qrmPy5mkAhukEEgjhOsc9xsggkv/ADUan1EzEUGMYMlv1MC/6eKgYPEBphxOuo8zI3eCCCrO4088WOIxBfAabEWzAEWt18FX4vZFR4zHJB3Cb+eiCCY5XabIrMLXdQfcEa7wfZdBo1/qUwfxCHDd8m/mggto58mf23DXlzTao0HxvfyPqo+z5e5tInU+fweyCCpk0x8azE4VmCoOeQHVnAhpIkCVzDaOIJJJMONzAQQV+Lxly+oNO9t4v8stANovNNjSMzwfptdIAIdBykTrI10gkWQQV76rPGo2Hg/8NSM3e6C7w0E+PryTFTFAOOURm8p4wggl8Vnquq7RcmTtIoIKytGzaZUuhtQoIIhb4TaEq7wuJlBBTBbUHypLUEFZAIIIIP/Z"
          username="Harry_P"
          mutualFriendsLength={27}
        />
        <FriendProfilePreview
          name="Rubeus Hagrid"
          src="data:image/jpeg;base64,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"
          username="LongBottom_Nevielle"
          mutualFriendsLength={4}
        />
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="text-xs text-gray-400 flex items-center gap-2 flex-wrap px-2 ">
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            About
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Blog
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Jobs
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Help
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Privacy
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Terms
          </span>
          <span className="hover:underline hover:underline-offset-2 cursor-pointer">
            Meta Verified
          </span>
        </div>
        <div className="mt-4 text-xs text-gray-400 text-center">
          Copyright &#169; 2023 DevSpace <br />
          Developed by
          <Link
            href="https://portfolio-sampriti27.vercel.app/"
            target="_blank"
            className="underline underline-offset-2 cursor-pointer ml-2"
          >
            Sampriti Mukherjee
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;