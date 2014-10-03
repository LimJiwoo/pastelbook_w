/**
 *  14. 9. 18.	v 0.0.1		Moved by HONG WON GI
 *  - 네임스페이스를 다루는 pb 스크립트를 따로 분리함 ( 관리상의 이유로 )
 *  - 네임스페이스에 타입을 넣음 ( 추후 pb.type.MoveAniParam ) 과 같은 형태로 바꾸기로
 *    
 */

var pb;

require(['jquery'],function($){
	$(function () {
		pb = pb || {};

		pb.type = pb.type || { }; // 파스텔북 내에서 쓰이는 각종 타입에 대한 설정을 extend 이용해서만들어 놓는다.

		pb.type.Project = pb.type.Project || {};
		pb.type.Scene = pb.type.Scene || {};
		pb.type.Group = pb.type.Group || {};
		pb.type.Object = pb.type.Object || {};

		pb.type.MoveAniParam = pb.type.MoveAniParam || {};

		pb.type.ProjectView = pb.type.ProjectView || {};
		pb.type.SceneView = pb.type.SceneView || {};
		pb.type.GroupView = pb.type.GroupView || {};
		pb.type.ObjectView = pb.type.ObjectView || {};

		//pb.type.ObjectContainer = pb.type.ObjectContainer || {};
		//pb.type.SceneContainer = pb.type.SceneContainer || {};
		//pb.type.GroupContainer = pb.type.GroupContainer || {};

		// 여기서부터는 원기추가
		
		pb.current = pb.current || {}; // 현재 선택된도구, 현재 슬라이드, 현재 클립보드 등 다수
		pb.current.project = pb.current.project || null; // 현재 로딩된 프로젝트 ( 포토샾처럼 다중 불러놓고 작업하기가 된다면, 로딩된 프로젝트중 선택된 프로젝트 )
		
		
		pb.ui = {}; // 사용자 개별의 ui 포지션, 혹은 크기 정보

		// 총 12개
	});
}); // require