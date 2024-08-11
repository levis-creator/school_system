import { Panel, PanelGroup } from "rsuite";
import ResultData from "./components/ResultData";

const ResultTable = () => {
  const data = [
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      grade_midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      grade_midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      grade_midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      midterm_grade: "A",
      final_exam_grade: "A",
    },
    {
      subject_code: 121,
      subject: "Mathematics I",
      mid_term: 45,
      final_exam: 50,
      midterm_grade: "A",
      final_exam_grade: "A",
    },
  ];
  return (
    <>
      <PanelGroup className="flex flex-col gap-5" accordion>
        <ResultData data={data} />
        <ResultData data={data} />
        <ResultData data={data} />
        <ResultData data={data} />
      </PanelGroup>
    </>
  );
};

export default ResultTable;
